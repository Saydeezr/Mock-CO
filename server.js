const inquirer = require('inquirer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const initialEntry = inquirer.prompt([
        { type: 'list',
          message: 'What would you like to do?',
          choices: ['View All Departments', 'View All Roles','View All Employees', 'Add Department', 
                    'Add A Role', 'Add An Employee', 'Update An Employee Role'],
          name: 'initial request'
        }
    ]) //add if stament?
    .then(initialEntry => {

    })

app.listen(PORT, () => { 
    console.log('listening on port')
});