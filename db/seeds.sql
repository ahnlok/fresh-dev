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
("Python")

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