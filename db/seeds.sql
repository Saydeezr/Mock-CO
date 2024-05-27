\c bcompany

INSERT INTO department(name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES 
    ('Salesperson', '75000', '2'),
    ('Software Engineer', '120000', '1'),
    ('Lawyer', '200000', '3'),
    ('Lead Engineer', '195000', '1');


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
    ('Sam', 'Crunik', 1, NULL);
    ('ELizabeth', 'Martin', 2, '201'),
    ('Antony', 'Giapolis', 3, '301'),
    ('Rachel', 'Ross', 4, '205');













-- --Queries needed:

-- -- read departments table
-- SELECT * from department;

-- -- read roles table
-- SELECT * from role;

-- -- read employee table
-- SELECT * from employee;

-- -- create (add) to department table
-- INSERT INTO department(name)
-- VALUE(`${entry.id}, ${entry.name}`);

-- -- create (add) to roles table
-- INSERT INTO role(title, salary, department_id)
-- VALUE('');

-- -- create (add) to employee table
-- INSERT INTO employee(first_name, last_name, role_id, manager_id)
-- VALUE('');

-- -- update to employee (role column)
-- UPDATE role set title =''and salary ='' and department ='' WHERE id ='';
-- -- might need to join