DROP DATABASE IF EXISTS freshdev_db;

CREATE DATABASE freshdev_db;

USE freshdev_db;

CREATE TABLE languages (
	id INTEGER NOT NULL AUTO_INCREMENT,
    language VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE students (
	id INTEGER NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(100) NOT NULL,
    mainLanguage VARCHAR(100),
    subLanguage VARCHAR(100),
    school VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    linkedIn VARCHAR(100) NOT NULL,
    gitHub VARCHAR(100) NOT NULL,
    resume VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE student_language (
	id INTEGER NOT NULL AUTO_INCREMENT,
	student_id INTEGER,
	language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES languages (id),
    FOREIGN KEY (student_id) REFERENCES students (id),
    PRIMARY KEY(id)
);
