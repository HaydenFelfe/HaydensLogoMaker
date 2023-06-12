const { generateLogo } = require('./lib/logo');
const fs = require('fs');
const inquirer = require('inquirer');


async function runLogoGenerator() {

    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function (input) {
          if (input.length > 3) {
            return 'Please enter up to three characters.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ]);
const logoSvg = generateLogo(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);

fs.writeFile('logo.svg', logoSvg, function(err){
    if(err) throw err;
    console.log('Generated logo.svg')
})
}
runLogoGenerator()
