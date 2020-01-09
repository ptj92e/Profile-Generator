// These variables are requiring all of the NPM packages that were downloaded
let inquirer = require("inquirer");
let fs = require('fs'), convertFactory = require("electron-html-to");
let conversion = convertFactory({ converterPath: convertFactory.converters.PDF });
let axios = require('axios');
let HTML = require('./generateHTML');
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
]).then(function (data, err) {
    //This if statement is only here in case an error occurs during the questioning
    if (err) {
        return console.log(err);
    };
    let bioPic = null;
    let givenName = null;
    let location = null;
    let githubUsername = null;
    let githubLink = null;
    let blog = null;
    let userBio = null;
    let publicRepos = null;
    let followers = null;
    let stars = null;
    let following = null;

    //This axios call is using the username collected from the prompts to call out to github
    axios.get("https://api.github.com/users/" + data.username).then(function (res) {
        //These lines are redeclaring variables with information pulled from the axios call
        bioPic = res.data.avatar_url;
        givenName = res.data.name;
        location = res.data.location;
        githubUsername = res.data.login;
        githubLink = "https://github.com/" + githubUsername;
        blog = res.data.blog;
        userBio = res.data.bio;
        publicRepos = res.data.public_repos;
        followers = res.data.followers;
        following = res.data.following;
        //This second axios call is pulling the information for the stars from GitHub
        axios.get("https://api.github.com/users/" + data.username + "/starred").then(function (res) {
            stars = res.data;
            //This variable is pulling the template literal from the generateHTML.js page and plugging in variables from the responses of the axios call
            let htmlData = HTML.generateHTML(data, bioPic, givenName, location, githubLink, blog, userBio, publicRepos, followers, stars, following);
            //This last function is using electrion-html-to to generate a pdf from the template literal in the generateHTML.js page
            conversion({ html: htmlData }, function (err, result) {
                if (err) {
                    return console.error(err);
                }
                result.stream.pipe(fs.createWriteStream('profile.pdf'));
                conversion.kill();
                });
            });
        });
    });