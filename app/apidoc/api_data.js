define({ "api": [
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/createNewIssue",
    "title": "To create a new issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the issue. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporter",
            "description": "<p>Reporter/Creator of the issue. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterId",
            "description": "<p>ReporterId of the issue. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": "<p>To whom this issue is assigned to. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeId",
            "description": "<p>assigneeId of the issue. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue: in-Backlog, in-Progress, in-Test, Done. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>About the issue. (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date this issue was created. (body Param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>shows error status, message, http status code &amp; result/data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n    {\n    \"error\": false,\n    \"message\": \"New issue created successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"_BBtxvirJ\",\n        \"title\": \"abc\",\n        \"reporter\": \"xyz\",\n        \"reporterId\": \"nWBMsoifj\",\n        \"assignee\": \"new user\",\n        \"assigneeId\": \"nWBMsoifj\",\n        \"status\": \"Done\",\n        \"description\": \"desc\",\n        \"createdOn\": \"2019-04-25T11:56:11.000Z\",\n        \"comments\": []\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to save new issue\",\n            \"status\": 500,\n            \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Post",
    "name": "PostApiV1IssueCreatenewissue"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/getAllIssues/userId",
    "title": "To get all the issues assigned to a user when he signs in.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (route Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>shows error status, message, http status code &amp; result/data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:    ",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Issues Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"issueId\": \"0RAnzS2rn\",\n            \"title\": \"x\",\n            \"reporter\": \"welcome new\",\n            \"reporterId\": \"nWBMsoifj\",\n            \"assignee\": \"welcome new\",\n            \"assigneeId\": \"nWBMsoifj\",\n            \"status\": \"in-Test\",\n            \"description\": \"<p>erer</p>\",\n            \"createdOn\": \"2019-04-25T11:52:04.000Z\",\n            \"comments\": []\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   \n{\n            \"error\": true,\n            \"message\": \"No Issues Found\",\n            \"status\": 404,\n            \"data\": null\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Read",
    "name": "GetApiV1IssueGetallissuesUserid"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/getAllUsers",
    "title": "To get all the registered users of the app.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>shows error status, message, http status code &amp; result/data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Users found successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"ZYQBBFs5U\",\n            \"lastName\": \"amn\",\n            \"createdOn\": \"2019-04-25T14:57:44.000Z\",\n            \"firstName\": \"abc\",\n            \"email\": \"amn@mail.com\",\n            \"mobileNumber\": \"9876543210\"\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find users. Invalid token.\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Read",
    "name": "GetApiV1IssueGetallusers"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/selectedIssue/issueId",
    "title": "To get the selected issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the user. (route Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>shows error status, message, http status code &amp; result/data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:    ",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue found!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"issueId\": \"0RAnzS2rn\",\n            \"title\": \"x\",\n            \"reporter\": \"welcome new\",\n            \"reporterId\": \"nWBMsoifj\",\n            \"assignee\": \"welcome new\",\n            \"assigneeId\": \"nWBMsoifj\",\n            \"status\": \"in-Test\",\n            \"description\": \"<p>erer</p>\",\n            \"createdOn\": \"2019-04-25T11:52:04.000Z\",\n            \"comments\": []\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   \n{\n                \"error\": true,\n                \"message\": \"Issue not found\",\n                \"status\": 404,\n                \"data\": null\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Read",
    "name": "GetApiV1IssueSelectedissueIssueid"
  },
  {
    "group": "Update",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issue/addComment/issueId",
    "title": "To add a new comment to an existing issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the user. (route Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>shows error status, message, http status code &amp; result/data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:    ",
          "content": " \n{\n        \"error\": false,\n        \"message\": \"Issue edited successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"issueId\": \"_BBtxvirJ\",\n            \"title\": \"abcsff\",\n            \"reporter\": \"xyz\",\n            \"reporterId\": \"nWBMsoifj\",\n            \"assignee\": \"new user\",\n            \"assigneeId\": \"nWBMsoifj\",\n            \"status\": \"Done\",\n            \"description\": \"desc\",\n            \"createdOn\": \"2019-04-25T11:56:11.000Z\",\n            \"comments\": [\n                {\n                    \"commentDate\": \"2019-04-13T10:50:25.577Z\",\n                    \"commenterId\": \"_BBtxvirJ\",\n                    \"commenterName\": \"gh\",\n                    \"commentText\": \"rytytytyy\"\n                }\n            ]\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   \n{\n                \"error\": true,\n                \"message\": \"Error! Cant edit.\",\n                \"status\": 404,\n                \"data\": null\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Update",
    "name": "PutApiV1IssueAddcommentIssueid"
  },
  {
    "group": "Update",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issue/edit/issueId",
    "title": "To edit an issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Unique token for user authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the user. (route Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>shows error status, message, http status code &amp; result/data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:    ",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue edited successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"issueId\": \"0RAnzS2rn\",\n            \"title\": \"x\",\n            \"reporter\": \"welcome new\",\n            \"reporterId\": \"nWBMsoifj\",\n            \"assignee\": \"welcome new\",\n            \"assigneeId\": \"nWBMsoifj\",\n            \"status\": \"in-Test\",\n            \"description\": \"<p>erer</p>\",\n            \"createdOn\": \"2019-04-25T11:52:04.000Z\",\n            \"comments\": []\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   \n{\n                \"error\": true,\n                \"message\": \"Error! Cant edit.\",\n                \"status\": 404,\n                \"data\": null\n            }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Update",
    "name": "PutApiV1IssueEditIssueid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout/:userId",
    "title": "Logout currently logged-in user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 0,\n        \"ok\": 1\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogoutUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signin",
    "title": "api for user signin.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail ID of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"signin Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\":string,\n        \"userDetails\":{\n        \"userId\":string,\n        \"firstName\": string,\n        \"lastName\": string,                \n        \"email\":string,\n        \"mobileNumber\": string,\n        \"createdOn\":date\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to signin\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "New User SignUp.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Created\",\n    \"status\": 200,\n    \"data\": {               \n        \"userId\":string,\n        \"firstName\": string,\n        \"lastName\": string,                \n        \"email\":string,\n        \"mobileNumber\": string,\n        \"password\": string,\n        \"createdOn\":date\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to create user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
