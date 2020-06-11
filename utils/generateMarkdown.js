function generateMarkdown(data) {
   return `
   ##${data.badge}
   #${data.title}
   ##${data.description}
   ##${data.contents}
   ##${data.installation}
   ##${data.usage}
   ##${data.installation}
   ##${data.contributing}
   ##${data.tests}
   ##${data.userName}
   `;
  }
  ​
  module.exports= generateMarkdown;