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
        answer.continue ? initialEntry() : process.exit();
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
        inquirer
          .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'name'
            }
          ]) 
          .then((answer) => {
            if(!answer.name){ 
                console.error('Name of department is required')
                return;
            } 
            
            const sql = `INSERT INTO department (name) VALUES($1);`
{
            pool.query(sql, [answer.name], (err, result) => {
                if(err) {
                    console.error(err)
                } else {
                    console.log('Department Added!')
                    continuePath();
                } 
              });  
            } 
          })
    };
        
   
  async function addRole(){
    const { rows } = await pool.query('SELECT * FROM department;')
    const departmentChoices = rows.map(({id, name}) => ({
        name: name,
        value: id
    })) 
    console.log(departmentChoices)
    inquirer
    .prompt([
      {
          type: 'input',
          message: 'What is the name of the new role?',
          name: 'name'
      },
      {
        type: 'input',
        message: 'What is the salary of the new role?',
        name: 'salary'
      },
      {
        type: 'list',
        message: 'Which department will this role fall under?',
        choices: departmentChoices,
        name: 'department'
      }
    ]) 
    .then((answer) => {
        console.log(answer)
      if(!answer.name){ 
          console.error('Name of role is required')
          return;
      } 
      
      const sql = `INSERT INTO role(title, salary, department_id) VALUES ($1, $2, $3);`

      pool.query(sql, [answer.name, answer.salary, answer.department], (err, result) => {
          if(err) {
              console.error(err)
          } else {
              console.log('Role added to the database!')
              continuePath();
          } 
        });  
    })
};
       

 async function addEmployee(){
    const { rows } = await pool.query('SELECT * FROM role;')
    const roleChoices = rows.map(({id, name}) => ({
        name: name, 
        value: id
    }))
    console.log(roleChoices);
    inquirer
    .prompt([
      {
          type: 'input',
          message: 'What is the first name of the employee?',
          name: 'firstName'
      },
      {
        type: 'input',
        message: 'What is the last name of the employee?',
        name: 'lastName'
      },
      {
        type: 'input',
        message: 'What is the role id number?',
        name: 'roleID'
      }
    ]) 
        const query = `INSERT INTO Employee(first_name, last_name, //add role and manager id?//) 
                       VALUES('');`
    }


//use SQL to update employee database
 function updateEmployee(){
    inquirer
    .prompt([
      {
          type: 'input',
          message: 'What employee would you like to update?',
          name: 'name'
      },
      {
        type: 'input',
        message: 'What is the new role of this updated employee?',
        name: 'role'
      }
    ])
    .then()
        const query = `UPDATE role set title =''and salary ='' and department ='' WHERE id ='';`
    }

initialEntry();