const inquirer = require('inquirer');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Obedience',
    database: 'bcompany'
});

pool.connect();

const initialEntry = () => {inquirer.prompt([
        { type: 'list',
          message: 'What would you like to do?',
          choices: ['View All Departments', 'View All Roles','View All Employees', 'Add Department', 
                    'Add A Role', 'Add An Employee', 'Update An Employee Role'],
          name: 'initialRequest'
        }
    ]) 
    .then(initialEntry => {
        switch(initialEntry.initialRequest){
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

//Function that brings user to initial prompt if want to continue
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

//uses SQL to view different databases
 function viewDepartments(){
        const sql = `SELECT * from department`

        pool.query(sql, (err, result) => {
            if(err) {
                console.error(err)
            } else {
                console.table(result.rows)
                continuePath(); 
            } 
        });
    };

 function viewRoles(){
        const sql = `SELECT * from Role;`
        pool.query(sql, (err,result) => {
            if(err) {
                console.error(err)
            } else { console.table(result.rows)
                continuePath();
            }
        });
    };

 function viewEmployees(){
        const sql = `SELECT * from Employee;`
        pool.query(sql, (err, result) => {
            if(err) {
                console.error(err)
            } else {
                console.table(result.rows)
                continuePath();
            }
        });
    };

//uses SQL query to add to databases 
 function addDepartment(){
        const sql = `INSERT INTO department (name) VALUE('');`

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
                Pool.query(sql, answer.name, (err, result) => {
                    if(err) {
                     console.error(err)
                    } else {
                     console.log(result)
                     continuePath();
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


//use SQL to update employee database
 function updateEmployee(){
        const query = `UPDATE role set title =''and salary ='' and department ='' WHERE id ='';`
    }

initialEntry();