INSERT INTO students
(firstName, lastName, mainLanguage, subLanguage, school, email, linkedIn, gitHub, resume, description)
VALUES
(
    "Alice",
    "Baker",
    "Javascript",
    "Python,",
    "GT-FT",
    "abaker@abccorp.com",
    "https://www.linkedin.com/in/alice-baker-2309483/",
    "https://github.com/abaker-charon12345",
    "https://alice-baker-resume.com",
    "Alice is here to learn some things."
),
(
    "Charlie",
    "Donner",
    "Javascript",
    "Python",
    "GT-FT",
    "cdonner@defplace.com",
    "https://www.linkedin.com/in/charlie-donner-4398743/",
    "https://github.com/cdonner-styx54321",
    "https://charlie-donner-resume.com",
    "Charlie is here to learn some things."
),
(
    "Elsa",
    "Foxtrot",
    "Javascript",
    "Python",
    "GT-FT",
    "efoxtrot@ghithing.com",
    "https://www.linkedin.com/in/elsa-foxtrot-666/",
    "https://github.com/elsa-foxtrot-phobos666",
    "https://elsa-foxtrot-resume.com",    
    "Elsa is here to learn some things."
),
(
    "George",
    "Halfthor",
    "Javascript",
    "Python",
    "GT-FT",
    "ghalfthor@jklfoo.com",
    "https://www.linkedin.com/in/george-halfthor-987/",
    "https://github.com/george-halfthor-titan",
    "https://george-halfthor-resume.com",    
    "George is here to learn greater than zero things."
),
(
    "Ingrid",
    "Jones",
    "Javascript",
    "Python",
    "GT-FT",
    "ijones@mnobar.com",
    "https://www.linkedin.com/in/ingrid-jones-ijz/",
    "https://github.com/ingrid-jones-charon",
    "https://ingrid-jones-resume.com",    
    "Ingrid is here to learn one or many things."
);

INSERT INTO languages (language)
VALUES
("Javascript"),
("React"),
("Python");

INSERT INTO student_language (student_id, language_id)
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
