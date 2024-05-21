DROP DATABASE IF EXISTS BMCompany;
CREATE DATABASE BMCompany;

\c BMCompany;

CREATE TABLE Department (
id Serial primary key,
name VARCHAR(30) unique not null);


CREATE TABLE Role (
id SERIAL primary key,
title VARCHAR(30) unique not null,
salary DECIMAL not null,
foreign key (Department),
references Department(id));


CREATE TABLE Employee (
id SERIAL primary key,
first_name VARCHAR(30) not null,
last_name VARCHAR(30) not null,
role_id INT not null,
foreign key (role_id)
references Role(id),
manager_id INT,
foreign key (manager_id)
references Employee(id));