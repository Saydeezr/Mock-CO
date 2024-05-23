const inquirer = require('inquirer');
const { Pool } = require('pg');

// Do I have to create a new pool class here?

const initialEntry = () => {inquirer.prompt([
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
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case "Add A Role":
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update An Employee Role':
                updateEmployee();
                break;
        }
    })};


   //any way to combine or make shorter?
    function viewDepartments(){
        const query = `SELECT * from Department`

        Pool.query(query, (err, result) => {
            if(err) {
                console.error(err)
            } else {
                console.log(result)
                continuePath(); 
            } 
        })
    };
     function continuePath() {
        inquirer
        .prompt([
        {
            type: 'confirm',
            message: 'Would you like to continue?',
            name: 'continue'
        }
    ])
    .then((answer) => {
        answer.continue ? initialEntry : console.log('Done')
    })
};


    function viewRoles(){
        const query = `SELECT * from Role;`
    }

    function viewEmployees(){
        const query = `SELECT * from Employee;`
    }


    function addDepartment(){
        const query = `INSERT INTO department (name) VALUE('');`

        inquirer
          .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'name'
            }
          ]) 
          .then((answer) => {
            if(!answer){ 
                console.error('Name is required')
            } else {
                Pool.query(query, answer.name, (err, result) => {
                    if(err) {
                     console.error(err)
                    } else {
                     console.log(result)
                } 
              });
            } 
          })
    };
        
   


    function addRole(){
        const query = `INSERT INTO Role(title, salary) 
                       VALUE('');`
    }

    function addEmployee(){
        const query = `INSERT INTO Employee(first_name, last_name, //add role and manager id?//) 
                       VALUE('');`
    }

    function updateEmployee(){
        const query = `UPDATE role set title =''and salary ='' and department ='' WHERE id ='';`
    }