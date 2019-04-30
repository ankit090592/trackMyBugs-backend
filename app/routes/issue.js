const express = require('express');
const router = express.Router();
const issueController = require('./../controllers/issueController');
const appConfig = require("./../../config/appConfig");
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/issue`;

    /**
              * @apiGroup Read
              * @apiVersion  1.0.0
              * @api {get} /api/v1/issue/getAllUsers To get all the registered users of the app.
              * @apiParam {String} authToken Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)
              * @apiSuccess {object} Success-Response shows error status, message, http status code & result/data.
              * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Users found successfully",
            "status": 200,
            "data": [
                {
                    "userId": "ZYQBBFs5U",
                    "lastName": "amn",
                    "createdOn": "2019-04-25T14:57:44.000Z",
                    "firstName": "abc",
                    "email": "amn@mail.com",
                    "mobileNumber": "9876543210"
                }

               * @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find users. Invalid token.",
	    "status": 404,
	    "data": null
	   }
    
                */

    // to get all the registered users of the app
    app.get(`${baseUrl}/getAllUsers`, auth.isAuthorized, issueController.getAllUsers);



    /**
                  * @apiGroup Read
                  * @apiVersion  1.0.0
                  * @api {get} /api/v1/issue/getAllIssues/userId To get all the issues assigned to a user when he signs in.
                  * @apiParam {String} authToken Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)
                  * @apiParam {string} userId userId of the user. (route Params) (required)
                  * @apiSuccess {object} Success-Response shows error status, message, http status code & result/data.
                  * @apiSuccessExample {object} Success-Response:    
        {
            "error": false,
            "message": "All Issues Listed",
            "status": 200,
            "data": [
                {
                    "issueId": "0RAnzS2rn",
                    "title": "x",
                    "reporter": "welcome new",
                    "reporterId": "nWBMsoifj",
                    "assignee": "welcome new",
                    "assigneeId": "nWBMsoifj",
                    "status": "in-Test",
                    "description": "<p>erer</p>",
                    "createdOn": "2019-04-25T11:52:04.000Z",
                    "comments": []
                }
        @apiErrorExample {json} Error-Response:
         *    
         * {
            "error": true,
            "message": "No Issues Found",
            "status": 404,
            "data": null
        }
        */

    app.get(`${baseUrl}/getAllIssues/:userId`, auth.isAuthorized, issueController.getAllIssues);


    /**
                      * @apiGroup Post
                      * @apiVersion  1.0.0
                      * @api {post} /api/v1/issue/createNewIssue To create a new issue
                      * @apiParam {String} authToken Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)
                      * @apiParam {string} title title of the issue. (body Param) (required)
                      * @apiParam {string} reporter Reporter/Creator of the issue. (body Param) (required)
                      * @apiParam {string} reporterId ReporterId of the issue. (body Param) (required)
                      * @apiParam {string} assignee To whom this issue is assigned to. (body Param) (required)
                      * @apiParam {string} assigneeId assigneeId of the issue. (body Param) (required)
                      * @apiParam {string} status Status of the issue: in-Backlog, in-Progress, in-Test, Done. (body Param) (required)
                      * @apiParam {string} description About the issue. (body Param) (required)
                      * @apiParam {string} createdOn Date this issue was created. (body Param) (required)
                      * @apiSuccess {object} Success-Response shows error status, message, http status code & result/data.
                      * @apiSuccessExample {object} Success-Response:
                      * 
        {
        "error": false,
        "message": "New issue created successfully!",
        "status": 200,
        "data": {
            "issueId": "_BBtxvirJ",
            "title": "abc",
            "reporter": "xyz",
            "reporterId": "nWBMsoifj",
            "assignee": "new user",
            "assigneeId": "nWBMsoifj",
            "status": "Done",
            "description": "desc",
            "createdOn": "2019-04-25T11:56:11.000Z",
            "comments": []
        }
    }
    @apiErrorExample {json} Error-Response:
       *
       * {
            "error": true,
            "message": "Failed to save new issue",
            "status": 500,
            "data": null
        }
        */
    // to create a issue,req title description,reporter,assignee,status,createdOn,modifiedOn
    app.post(`${baseUrl}/createNew`, auth.isAuthorized, issueController.createNewIssue);


    /**
                      * @apiGroup Read
                      * @apiVersion  1.0.0
                      * @api {get} /api/v1/issue/selectedIssue/issueId To get the selected issue.
                      * @apiParam {String} authToken Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)
                      * @apiParam {string} issueId issueId of the user. (route Params) (required)
                      * @apiSuccess {object} Success-Response shows error status, message, http status code & result/data.
                      * @apiSuccessExample {object} Success-Response:    
            {
                "error": false,
                "message": "Issue found!",
                "status": 200,
                "data": [
                    {
                        "issueId": "0RAnzS2rn",
                        "title": "x",
                        "reporter": "welcome new",
                        "reporterId": "nWBMsoifj",
                        "assignee": "welcome new",
                        "assigneeId": "nWBMsoifj",
                        "status": "in-Test",
                        "description": "<p>erer</p>",
                        "createdOn": "2019-04-25T11:52:04.000Z",
                        "comments": []
                    }
            @apiErrorExample {json} Error-Response:
             *    
             * {
                "error": true,
                "message": "Issue not found",
                "status": 404,
                "data": null
            }
            */
    // to get selected issue by its id
    app.get(`${baseUrl}/selectedIssue/:issueId`, auth.isAuthorized, issueController.getSelectedIssueById);



    /**
                      * @apiGroup Update
                      * @apiVersion  1.0.0
                      * @api {put} /api/v1/issue/edit/issueId To edit an issue.
                      * @apiParam {String} authToken Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)
                      * @apiParam {string} issueId issueId of the user. (route Params) (required)
                      * @apiSuccess {object} Success-Response shows error status, message, http status code & result/data.
                      * @apiSuccessExample {object} Success-Response:    
            {
                "error": false,
                "message": "Issue edited successfully!",
                "status": 200,
                "data": [
                    {
                        "issueId": "0RAnzS2rn",
                        "title": "x",
                        "reporter": "welcome new",
                        "reporterId": "nWBMsoifj",
                        "assignee": "welcome new",
                        "assigneeId": "nWBMsoifj",
                        "status": "in-Test",
                        "description": "<p>erer</p>",
                        "createdOn": "2019-04-25T11:52:04.000Z",
                        "comments": []
                    }
            @apiErrorExample {json} Error-Response:
             *    
             * {
                "error": true,
                "message": "Error! Cant edit.",
                "status": 404,
                "data": null
            }
            */
    // to edit an existing issue
    app.put(`${baseUrl}/edit/:issueId`, auth.isAuthorized, issueController.editIssue);


    /**
                  * @apiGroup Update
                  * @apiVersion  1.0.0
                  * @api {put} /api/v1/issue/addComment/issueId To add a new comment to an existing issue.
                  * @apiParam {String} authToken Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)
                  * @apiParam {string} issueId issueId of the user. (route Params) (required)
                  * @apiSuccess {object} Success-Response shows error status, message, http status code & result/data.
                  * @apiSuccessExample {object} Success-Response:    
                  *  
    * {
        "error": false,
        "message": "Issue edited successfully",
        "status": 200,
        "data": {
            "issueId": "_BBtxvirJ",
            "title": "abcsff",
            "reporter": "xyz",
            "reporterId": "nWBMsoifj",
            "assignee": "new user",
            "assigneeId": "nWBMsoifj",
            "status": "Done",
            "description": "desc",
            "createdOn": "2019-04-25T11:56:11.000Z",
            "comments": [
                {
                    "commentDate": "2019-04-13T10:50:25.577Z",
                    "commenterId": "_BBtxvirJ",
                    "commenterName": "gh",
                    "commentText": "rytytytyy"
                }
            ]
        }
    }
    @apiErrorExample {json} Error-Response:
             *    
             * {
                "error": true,
                "message": "Error! Cant edit.",
                "status": 404,
                "data": null
            }
    */
    // to add a comment to an existing issue
    app.put(`${baseUrl}/addComment/:issueId`, auth.isAuthorized, issueController.addNewComment);
}