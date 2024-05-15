-- Create a users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);

-- Insert mock data into the users table
INSERT INTO users (username, password, email) VALUES
('testuser1', 'password1', 'test1@example.com'),
('testuser2', 'password2', 'test2@example.com');
