// These variables are requiring all of the NPM packages that were downloaded
let inquirer = require("inquirer");
let fs = require('fs');
let electron = require('electron');
let axios = require('axios');
// This function prompts the user with a series of questions
inquirer.prompt([
    {
        // This question asks for the user's github username
        type: "input",
        name: "username",
        message: "What is your GitHub user name?",
    },
    {
        //This question asks for the user's favorite color
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"],
    }
//This information is passed to a function that 
]).then(function(data, err) {
    //This if statement is only here in case an error occurs during the questioning
    if (err) {
        return console.log(err);
    };
    //This axios call is using the username collected from the prompts to call out to github
    axios.get("https://api.github.com/users/" + data.username).then(function(res) {
        givenName = res.data.name;
        let userBio = res.data.bio;
        let publicRepos = res.data.public_repos;
        let followers = res.data.followers;
        let following = res.data.following;
        let blog = res.data.blog;
        let githubUsername = res.data.login;
        let githubLink = "https://github/" + githubUsername;
    });
})