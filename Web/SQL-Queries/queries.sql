-- database: mysql

-- get all users from the users table

SELECT * FROM users;

-- get all users from the users table with the name "John"

SELECT * FROM users WHERE name = 'John';

-- show all the tables in the database

SHOW TABLES;

-- show all the databases in the server

SHOW DATABASES;

-- get all the users from the users table ordered by the salary column

SELECT * FROM users ORDER BY salary;

-- get all the users from the users table ordered by the salary column in descending order

SELECT * FROM users ORDER BY salary DESC;

-- get all the users from the users table and join them with the addresses table

SELECT * FROM users JOIN addresses ON users.id = addresses.user_id;

-- get all the users from the users table and join them with the addresses table, 
-- where the user name ends with the letter w

SELECT * FROM users JOIN addresses ON users.id = addresses.user_id WHERE name LIKE '%w';

