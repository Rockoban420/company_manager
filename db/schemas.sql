DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE department (
    d_id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (d_id)
);
    

CREATE TABLE role (
    r_id INT AUTO_INCREMENT,
    title  VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (r_id),
    FOREIGN KEY (department_id) REFERENCES department(d_id)
);

CREATE TABLE employee (
    e_id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id VARCHAR(30),
    PRIMARY KEY (e_id),
    FOREIGN KEY (role_id) REFERENCES role(r_id)
);