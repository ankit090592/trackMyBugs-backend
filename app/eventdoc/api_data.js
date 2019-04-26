define({ "api": [
  {
    "group": "Emit",
    "version": "1.0.0",
    "type": "emit",
    "url": "follow-issue Follow the current/selected issue when",
    "title": "either \"follow\" is checked or a new issue is created",
    "description": "<p><b>(&quot;follow-issue&quot;)<b></p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitFollowIssueFollowTheCurrentSelectedIssueWhen"
  },
  {
    "group": "Emit",
    "version": "1.0.0",
    "type": "emit",
    "url": "get-all-followers",
    "title": "Retrieve all followers of an issue",
    "description": "<p><b>(&quot;get-all-followers&quot;)<b></p>",
    "examples": [
      {
        "title": "Example data",
        "content": "{\n \"issueId\",   \n [followers list array]\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitGetAllFollowers"
  },
  {
    "group": "Emit",
    "version": "1.0.0",
    "type": "emit",
    "url": "notify-all-followers",
    "title": "Notify all followers of an issue",
    "description": "<p><b>(&quot;notify-all-followers&quot;)<b></p>",
    "examples": [
      {
        "title": "Example data",
        "content": "{\n    \"notification data\"\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitNotifyAllFollowers"
  },
  {
    "group": "Emit",
    "version": "1.0.0",
    "type": "emit",
    "url": "setUser",
    "title": "Set a user as online",
    "description": "<p><b>(&quot;set-user&quot;)</b> -&gt; Called: When a user comes online. -&gt; Params: authentication token</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSetuser"
  },
  {
    "group": "Emit",
    "version": "1.0.0",
    "type": "emit",
    "url": "unfollow-issue",
    "title": "Un-follow an issue which a user is currently is following",
    "description": "<p><b>(&quot;unfollow-issue&quot;)<b></p>",
    "examples": [
      {
        "title": "Example data",
        "content": "{\n    \"issueID\",\n    [updated followers list]\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUnfollowIssue"
  },
  {
    "version": "1.0.0",
    "group": "Listen",
    "type": "listen",
    "url": "authError",
    "title": "Failed authentication token authorization",
    "description": "<p><b>(&quot;auth-error&quot;)</b> Called: Listened by current/main room when there is a problem with authentication token like incorrect/expired</p>",
    "examples": [
      {
        "title": "Example data",
        "content": "{\n  \"status\": 500,\n  \"error\": Authentication token expired/incorrect                                   \n }",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenAutherror"
  },
  {
    "group": "Listen",
    "version": "1.0.0",
    "type": "listen",
    "url": "verifyUser",
    "title": "Authenticate a user",
    "description": "<p><b>(&quot;verifyUser&quot;)</b> -&gt; Called: On User's end.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenVerifyuser"
  }
] });
