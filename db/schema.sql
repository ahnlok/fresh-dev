DROP DATABASE IF EXISTS freshdev_db;

CREATE DATABASE freshdev_db;

USE freshdev_db;

CREATE TABLE language (
	id INTEGER NOT NULL AUTO_INCREMENT,
    language VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE student (
	id INTEGER NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    school VARCHAR(100),
    description TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE student_language (
	id INTEGER NOT NULL AUTO_INCREMENT,
	student_id INTEGER,
	language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES language (id),
    FOREIGN KEY (student_id) REFERENCES student (id),
    PRIMARY KEY(id)
);
