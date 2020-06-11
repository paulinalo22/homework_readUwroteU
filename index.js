const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Hello, what is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "If you want a badge, can you please provide the link or code, but you don't have to..."
    },
    {
        type: "input",
        name: "description",
        message: "Can you tell me more about your project? Describe it in detail."
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions, my friend."
    },
    {
        type: "input",
        name: "usage",
        message: "Can you provide the project usage :D"
    },
    {
        type: "input",
        name: "license",
        message: "Oh yeah, here is the part in which you provide the license (it can also de a badge)"
    },
    {
        type: "input",
        name: "contributing",
        message: "Is there anyone/anything you would like to add as contributor?"
    },
    {
        type: "input",
        name: "test",
        message: "Here you can tell me more about all that important testing you did (tests)"
    },
    {
        type: "input",
        name: "username",
        message: "Github username:"
    },
    {
        type: "input",
        name: "repo",
        message: "One last thing, type/paste the repo link :)"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

function init() {

}

init();
