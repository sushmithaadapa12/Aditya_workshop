1. Connect to MySQL
bash
Copy code
mysql -u root -p
Log in to MySQL with your username (root in this case) and password.

2. Database Commands
Create a Database
sql
Copy code
CREATE DATABASE workshop_db;
Use a Database
sql
Copy code
USE workshop_db;
Show All Databases
sql
Copy code
SHOW DATABASES;
3. Table Commands
Create a Table
Create a simple users table to store user data:

sql
Copy code
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT,
    city VARCHAR(50)
);
Show Tables
sql
Copy code
SHOW TABLES;
Describe Table Structure
sql
Copy code
DESCRIBE users;
4. Insert Data into Table
Insert a Single Row
sql
Copy code
INSERT INTO users (name, email, age, city) VALUES ('Alice', 'alice@example.com', 25, 'New York');
Insert Multiple Rows
sql
Copy code
INSERT INTO users (name, email, age, city) VALUES 
('Bob', 'bob@example.com', 30, 'Los Angeles'),
('Charlie', 'charlie@example.com', 28, 'Chicago'),
('Daisy', 'daisy@example.com', 22, 'Houston');
5. Retrieve Data (SELECT)
Select All Rows
sql
Copy code
SELECT * FROM users;
Select Specific Columns
sql
Copy code
SELECT name, email FROM users;
Select with Conditions (WHERE)
sql
Copy code
SELECT * FROM users WHERE city = 'New York';
Select with Sorting (ORDER BY)
sql
Copy code
SELECT * FROM users ORDER BY age DESC;
Select with Limits (LIMIT)
sql
Copy code
SELECT * FROM users LIMIT 2;
6. Update Data
Update a Single Record
sql
Copy code
UPDATE users SET age = 26 WHERE name = 'Alice';
Update Multiple Records
sql
Copy code
UPDATE users SET city = 'San Francisco' WHERE city = 'Los Angeles';
7. Delete Data
Delete a Single Record
sql
Copy code
DELETE FROM users WHERE name = 'Daisy';
Delete All Rows in a Table
sql
Copy code
DELETE FROM users;
(Note: This will delete all records but keep the table structure.)

8. Alter Table
Add a New Column
sql
Copy code
ALTER TABLE users ADD COLUMN phone VARCHAR(15);
Modify an Existing Column
sql
Copy code
ALTER TABLE users MODIFY COLUMN phone VARCHAR(20);
Drop a Column
sql
Copy code
ALTER TABLE users DROP COLUMN phone;
9. Drop Table and Database
Drop a Table
sql
Copy code
DROP TABLE users;
Drop a Database
sql
Copy code
DROP DATABASE workshop_db;
Sample Data Set for Workshop
After creating the users table, you can use the following sample data:

sql
Copy code
INSERT INTO users (name, email, age, city) VALUES 
('Alice', 'alice@example.com', 25, 'New York'),
('Bob', 'bob@example.com', 30, 'Los Angeles'),
('Charlie', 'charlie@example.com', 28, 'Chicago'),
('Daisy', 'daisy@example.com', 22, 'Houston'),
('Eve', 'eve@example.com', 29, 'Seattle');