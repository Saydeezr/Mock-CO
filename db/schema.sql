DROP DATABASE IF EXISTS bcompany;
CREATE DATABASE bcompany;

\c bcompany

CREATE TABLE Department (
id Serial primary key,
name VARCHAR(30) not null);


CREATE TABLE Role (
id SERIAL primary key,
title VARCHAR(30) unique not null,
salary DECIMAL not null,
department_id INT not null,
foreign key (department_id)
references Department(id)
ON DELETE SET NULL);


CREATE TABLE Employee (
id SERIAL primary key,
first_name VARCHAR(30) not null,
last_name VARCHAR(30) not null,
role_id INT not null,
foreign key (role_id)
references Role(id),
manager_id INT,
foreign key (manager_id)
references Employee(id) ON UPDATE CASCADE);