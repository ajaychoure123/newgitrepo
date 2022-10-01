$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 4,
  "name": "OrangeHRM ONLINE APPLICATION.",
  "description": "",
  "id": "orangehrm-online-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@HRM1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Test.",
  "description": "",
  "id": "orangehrm-online-application.;login-test.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@HRM2"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enter \"\u003cusername\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be on homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "orangehrm-online-application.;login-test.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "orangehrm-online-application.;login-test.;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14,
      "id": "orangehrm-online-application.;login-test.;;2"
    },
    {
      "cells": [
        "Ajay",
        "ajay123"
      ],
      "line": 15,
      "id": "orangehrm-online-application.;login-test.;;3"
    },
    {
      "cells": [
        "Sachin",
        "sa123"
      ],
      "line": 16,
      "id": "orangehrm-online-application.;login-test.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4979807300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Test.",
  "description": "",
  "id": "orangehrm-online-application.;login-test.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@HRM2"
    },
    {
      "line": 3,
      "name": "@HRM1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Admin\"and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefin.user_on_login_page()"
});
formatter.result({
  "duration": 23220679500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "LoginStepDefin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1693892000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_should_be_on_homepage()"
});
formatter.result({
  "duration": 3438087700,
  "status": "passed"
});
formatter.after({
  "duration": 72401800,
  "status": "passed"
});
formatter.before({
  "duration": 2789441600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Test.",
  "description": "",
  "id": "orangehrm-online-application.;login-test.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@HRM2"
    },
    {
      "line": 3,
      "name": "@HRM1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Ajay\"and \"ajay123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefin.user_on_login_page()"
});
formatter.result({
  "duration": 11281865000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ajay",
      "offset": 12
    },
    {
      "val": "ajay123",
      "offset": 22
    }
  ],
  "location": "LoginStepDefin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1292781300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_should_be_on_homepage()"
});
formatter.result({
  "duration": 2403979600,
  "status": "passed"
});
formatter.after({
  "duration": 47073100,
  "status": "passed"
});
formatter.before({
  "duration": 2776232200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Test.",
  "description": "",
  "id": "orangehrm-online-application.;login-test.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@HRM2"
    },
    {
      "line": 3,
      "name": "@HRM1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Sachin\"and \"sa123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefin.user_on_login_page()"
});
formatter.result({
  "duration": 11627588100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin",
      "offset": 12
    },
    {
      "val": "sa123",
      "offset": 24
    }
  ],
  "location": "LoginStepDefin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1890942700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_should_be_on_homepage()"
});
formatter.result({
  "duration": 3701848700,
  "status": "passed"
});
formatter.after({
  "duration": 75942800,
  "status": "passed"
});
});