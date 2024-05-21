const inquirer = require('inquirer');
//can I use sequelize for this project?

const initialEntry = inquirer.prompt([
        { type: 'list',
          message: 'What would you like to do?',
          choices: ['View All Departments', 'View All Roles','View All Employees', 'Add Department', 
                    'Add A Role', 'Add An Employee', 'Update An Employee Role'],
          name: 'initial request'
        }
    ]) 
    .then(initialEntry => {
        switch(initialEntry.options){
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
        }
    })

    function viewDepartments(){

    }

    function viewRoles(){

    }