CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100),
    grade VARCHAR(10)
);

INSERT INTO students (name, course, grade) VALUES
('Alice', 'Math', 'A'),
('Bob', 'Science', 'B');
