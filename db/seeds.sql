INSERT INTO department (name)
VALUES ("Engineer"),
	("IT"),
    ("Sales"),
    ("Marketing"),
    ("Finance"),
    ("Legal"),
    ("HR");
    
INSERT INTO role (title, salary)
VALUES ("Engineer", 80000),
	("IT", 90000),
    ("Sales", 100000),
    ("Marketing", 110000),
    ("Finance", 120000),
    ("Legal", 130000),
    ("HR", 140000);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES ("Manny", "Hernandez", 1, 1),
    ("Lotrex", "Avellaneda", 1, 3),
    ("Juan", "Perez", 2, 3),
    ("Pedro", "Gonzalez", 3, 4),
    ("Maria", "Gonzalez", 4, 5),
    ("Jose", "Gonzalez", 5, 6),
    ("Miguel", "Gonzalez", 6, 7);