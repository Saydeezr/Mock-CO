--Queries needed:

-- read departments table
SELECT * from department;

-- read roles table
SELECT * from role;

-- read employee table
SELECT * from employee;

-- create (add) to department table
INSERT INTO department(id, name)
VALUE(`${entry.id}, ${entry.name}`);

-- create (add) to roles table
INSERT INTO role(id, title, salary, department_id)
VALUE('');

-- create (add) to employee table
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUE('');

-- update to employee (role column)
UPDATE role set title =''and salary ='' and department ='' WHERE id ='';
-- might need to join