DROP DATABASE IF EXISTS project2starter;

CREATE DATABASE project2starter;

USE project2starter;

CREATE TABLE lang (
	id INTEGER NOT NULL AUTO_INCREMENT,
    lang VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE student (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    school VARCHAR(100),
    description TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE student_lang (
	id INTEGER NOT NULL AUTO_INCREMENT,
	student_id INTEGER,
	lang_id INTEGER,
    FOREIGN KEY (lang_id) REFERENCES lang (id),
    FOREIGN KEY (student_id) REFERENCES student (id),
    PRIMARY KEY(id)
);

INSERT INTO student (name, email, school, description)
VALUES 
("Alice Baker", "abaker@abccorp.com", "GT-FT", "Alice is here to learn some things."),
("Charlie Donner", "cdonner@defplace.com", "GT-FT", "Charlie is here to learn some things."),
("Elsa Foxtrot", "efoxtrot@ghithing.com", "GT-FT", "Elsa is here to learn some things."),
("George Halfthor", "ghalfthor@jklfoo.com", "GT-FT", "George is here to learn some things."),
("Ingrid Jones", "ijones@mnobar.com", "GT-FT", "Ingrid is here to learn some things.");

INSERT INTO lang (lang)
VALUES
("Javascript"),
("React"),
("Python");

INSERT INTO student_lang (student_id, lang_id)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(3, 1),
(4, 2),
(4, 3),
(5, 3),
(5, 1);