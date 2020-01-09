# Profile-Generator

## Node Profile Generator 

In this activity, I have been tasked with creating a profile generator using node. The goal of the activity is to create an app using Node to prompt the user for their GitHub username and favorite color. From this information alone, the app creates a PDF using information pulled from GitHub. 

I was given a file with an array of different colors and the beginning of a template literal to be used as the beginning of the styling. It was then my job to fill in the rest of the HTML to create the layout of the page. 

## NPM Install
For this application to work, I needed to use the Node Package Manage functionality to install different modules to be used in the application. In this app, I had to install Inquirer, FS, Axios, and Electron-HTML-To. All of these modules provide functionality that uses JavaScript to do different things. The Inquirer module uses different prompts to gather information from uses and that information can be passes as arguments to different functions. The FS module writes files based off of information passed into it. The Axios module is a back-end API calling system that retrieves information from API urls given to it. Lastly, the Electron-HTML-To module is used in conjunction with the FS module to convert the generated HTML file into a PDF. 

### Inquirer
In the first section of code, Inquirer is asking the user for their username and favorite color. The username is collected from an input style prompt and the favorite color is retrieved from a list. For what I was given in the generateHTML.js file, a list made more sense than another input because of the limited color selection. 

### Axios
After the Inquirer prompts have been filled, the information is passed to the Axios call to gather information from GitHub. The information from GitHub is then stored into variables and plugged into the template literal in the generateHTML.js file. 

### FS and Electron-HTML-To
Once the variables are stored into variables and passed into the template literal, the Electron and FS modules work together to write the template and it is then converted into a PDF file. After this file has been created, the PDF is stored in the folder as profile.pdf. 