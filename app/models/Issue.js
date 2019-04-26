'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let issueSchema = new Schema({
    issueId: {
        type: String,
        default: '',
        index: true,
        unique: true,
        required: true
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    reporter: {
        type: String,
        default: '',
        required: true
    },
    reporterId: {
        type: String,
        default: '',
        required: true
    },
    assignee: {
        type: String,
        default: '',
        required: true
    },
    assigneeId: {
        type: String,
        default: '',
        required: true
    },
    status: {
        type: String,
        default: '',
        required: true
    },
    createdOn: {
        type: Date
    },
    description: {
        type: String,
        default: ''
    },
    comments: [
        {
            _id: false,
            commenterId: {
                type: String,
                required: true
            },
            commenterName: {
                type: String,
                required: true
            },
            commentDate: {
                type: Date,
                default: Date.now()
            },
            commentText: {
                type: String
            }
        }

    ]

})

mongoose.model('Issue', issueSchema);