const mongoose = require('mongoose')
const socketio = require('socket.io')
const tokenLib = require('./tokenLib')
const redisLib = require('./redisLib')
const logger = require('./../libs/loggerLib');


//called from app.js
//getting http server from there
let setServer = (server) => {
    let io = socketio.listen(server)
    let myIo = io.of('')  //namespace: global instance of io can be used for cross socket communication.


    //main event handler: everything happens here
    myIo.on('connection', (socket) => {

        //event handling on client side to get verified user with an authToken
        /**
         * @apiGroup Listen
         * @apiVersion 1.0.0     
         * @api {listen} verifyUser Authenticate a user	  
         * @apiDescription <b>("verifyUser")</b> 
         * -> Called: On User's end.     
         */
        socket.emit('verifyUser', '')


        /**
         * @apiGroup Emit 
         * @apiVersion 1.0.0	 
         * @api {emit} setUser Set a user as online
         * @apiDescription <b>("set-user")</b>
         * -> Called: When a user comes online.
         * -> Params: authentication token        
         */

        socket.on('set-user', (authToken) => {

            tokenLib.verifyClaimWithoutSecret(authToken, (err, result) => {
                if (err) {
                	/**
                    * @apiVersion 1.0.0    
                    * @apiGroup Listen                         
                    * @api {listen} authError Failed authentication token authorization                              
                    * @apiDescription <b>("auth-error")</b>
                    * Called: Listened by current/main room when there is a problem with authentication token like incorrect/expired
                    * @apiExample Example data
                      {
                        "status": 500,
                        "error": Authentication token expired/incorrect                                   
                       }
                     */
                    socket.emit('authError', { status: 500, error: 'Authentication token expired/incorrect' })
                } else {
                    let currentUser = result.data
                    socket.userId = currentUser.userId
                    socket.userName = (currentUser.firstName + ' ' + currentUser.lastName).trim()

                    // joining our issues which we are following
                    // getting a user's all issues
                    // result variable will give issues array
                    redisLib.getFollowersAndIssueListHash(currentUser.userId, (err, result) => {
                        if (err) {
                            logger.error(err, 'set-user: Redislib getFollowersAndIssueListHash', 10)
                        }
                        else {
                            for (let issue in result) {
                                socket.join(issue)
                                // console.log("Joined issue:" + issue)
                            }
                        }

                    })
                }

                // -----------------
                /**
                * @apiGroup Listen 
                * @apiVersion 1.0.0                
                * @api {listen} startUserRoom Notifying client of a new room creation                
                * @apiDescription <b>("startUserRoom")</b>
               */
                socket.emit('startUserRoom', '')


                /**
                * @apiGroup Emit 
                * @apiVersion 1.0.0                
                * @api {emit} joinUserRoom A user joins a socket room to receive updates related only to him.
                * @apiDescription <b>("joinUserRoom")<b>                
                * @apiExample Example data
                   {
                       "roomId":string,
                       "userId":string,
                       "userName":string
                   }
               */
                socket.on('joinUserRoom', (data) => {
                    socket.room = data.userId
                    // console.log("Joining user room: " + socket.room)
                    socket.join(socket.room)
                })
                // -----------------

                /**
                * @apiGroup Emit 
                * @apiVersion 1.0.0                
                * @api {emit} follow-issue Follow the current/selected issue when
                * either "follow" is checked or a new issue is created                         
                * @apiDescription <b>("follow-issue")<b>                
               */

                // user created new issue or clicked on follow issue
                // first set that user in that issue hash as follower
                // then get that follower from issue hash
                // then in follower's/user's hash set this issue
                // then join that issue room
                socket.on('follow-issue', (data) => {
                    console.log(data)
                    let key1 = data.userId
                    let value1 = data.userName
                    // for setting followers of an issue
                    // result variable will give followers array
                    redisLib.setFollowersAndIssueListHash(data.issueId, key1, value1, (err, result) => {
                        if (err) {
                            console.log('some error occured')
                        }
                        else {
                            // getting 1 issue's all followers
                            // result variable will give followers array
                            redisLib.getFollowersAndIssueListHash(data.issueId, (err, result) => {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    // for all issues of a user
                                    // saving each users issue
                                    let key2 = data.issueId
                                    let value2 = data.issueTitle
                                    redisLib.setFollowersAndIssueListHash(data.userId, key2, value2, (err, result2) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            console.log(result)
                                            socket.join(data.issueId)
                                            console.log("created & joined a new issue, issueId:" + data.issueId)
                                            socket.emit(data.issueId, result)
                                        }
                                    })
                                }
                            })
                        }
                    })
                })



                /**
                * @apiGroup Emit 
                * @apiVersion 1.0.0                
                * @api {emit} notify-assignee-new-issue Notify a user that he has been assigned a new issue.
                * @apiDescription <b>("notify-assignee-new-issue")<b>                
                */
                socket.on('notify-assignee-new-issue', (data) => {
                    console.log("notify-assignee-new-issue called.")
                    // socket.to(socket.room).broadcast.emit('update-issue-list',data)
                    io.sockets.in(data.assigneeId).emit('update-issue-list', data)
                })



                /**
                * @apiGroup Emit 
                * @apiVersion 1.0.0                
                * @api {emit} unfollow-issue Un-follow an issue which a user is currently is following
                * @apiDescription <b>("unfollow-issue")<b>                
                * @apiExample Example data
                   {
                       "issueID",
                       [updated followers list]
                   }
               */

                socket.on('unfollow-issue', (data) => {
                    console.log(data)
                    let key1 = data.userId
                    let key2 = data.issueId
                    // remove user from issue hash
                    redisLib.deleteFromHash(data.issueId, key1)
                    // remove issue from user hash
                    redisLib.deleteFromHash(data.userId, key2)
                    redisLib.getFollowersAndIssueListHash(data.issueId, (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log("unfollowed, issueId:" + data.issueId)
                            console.log("updated followers list: " + JSON.stringify(result))
                            socket.leave(data.issueId)

                            socket.emit(data.issueId, result)
                        }
                    })

                })

            })
        })


        /**
                * @apiGroup Emit 
                * @apiVersion 1.0.0                
                * @api {emit} notify-all-followers Notify all followers of an issue
                * @apiDescription <b>("notify-all-followers")<b>                
                * @apiExample Example data
                   {
                       "notification data"
                   }
               */

        socket.on('notify-all-followers', (data) => {
            // all the users who joined the room whose id is data.issueId will get a notification
            socket.to(data.issueId).broadcast.emit('notification', data)
            console.log("Broadcasting to all followers" + data)
        })


        /**
                * @apiGroup Emit 
                * @apiVersion 1.0.0                
                * @api {emit} get-all-followers Retrieve all followers of an issue
                * @apiDescription <b>("get-all-followers")<b>                
                * @apiExample Example data
                   {
                    "issueId",   
                    [followers list array]
                   }
               */

        socket.on('get-all-followers', (issueId) => {
            redisLib.getFollowersAndIssueListHash(issueId, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("followers list backend" + result)
                    socket.emit(issueId, result)
                }
            })
        })


        socket.on('disconnect', (userId) => {

            redisLib.getFollowersAndIssueListHash(userId, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    //update online users list after removing offline user from hash
                    socket.leave(socket.room)
                }
            })
        })

    })

} //setServer end

module.exports = {
    setServer: setServer
}