let inquirer = require("inquirer");
let fs = require('fs');
let electron = require('electron');
let axios = require('axios');

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name?",
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"],
    }
]).then(function(data) {

})