const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const markdown = require('./utils/generateMarkdown')
​
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
        message: "Can you tell me more about your project? Describe it.",
    },
    {
        type: "input",
        name: "contents",
        message: "Please list your table of contents here",
    },
    {
        type: "input",
        name: "installations",
        message: "Please type the installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please type the project usage",
    },
    {
        type: "input",
        name: "license",
        message: "Please type the project license",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please type the contributing parties",
    },
    {
        type: "input",
        name: "tests",
        message: "What tests did you perform for your project?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your github username",
    }
]
​
inquirer.prompt(questions).then(function(data){
    console.log(data.title);
    console.log(data.description);
    console.log(data.contents);
    console.log(data.installations);
    console.log(data.contributing);
    console.log(data.tests);
    console.log(data.userName);
​
});
​
​
​//axios
    //getUser (userName)
  //.get(`https://api.github.com/users/${username}`)
  //.then(function(res) {
   // console.log(res.data);
 // });
​
function writeToFile(filename, data) {
    markdown();
    console.log("running");
}
writeToFile();
function init() {
​
}
​
init();