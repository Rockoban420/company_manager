INSERT INTO department (name)
VALUES ("Engineering"),
	("IT"),
    ("Sales"),
    ("Marketing"),
    ("Finance"),
    ("Legal"),
    ("HR");
    
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer Manager", 200000, 1),
	("IT Staff", 90000, 2),
    ("IT Manager", 130000, 2),
    ("Phone Sales", 100000, 3),
    ("Junior Engineer", 55000, 1),
    ("Marketing Manager", 110000, 4),
    ("HR Manager", 150000, 7),
    ("Finance Intern", 120000, 5),
    ("Legal Junior", 130000, 6),
    ("HR Staff", 100000, 7);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES ("Manny", "Hernandez", 1, ""),
    ("Lotrex", "Avellaneda", 4, "Manny"),
    ("Juan", "Perez", 2, "Pedro"),
    ("Pedro", "Martinez", 3, ""),
    ("Maria", "Tooley", 10, "Jose"),
    ("Jose", "Gonzalez", 7, ""),
    ("Miguel", "Jones", 4, "");
  