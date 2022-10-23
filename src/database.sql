-- CREATE DATABASE bloomier-db; 
--\c bloomier-db

CREATE TABLE IF NOT EXISTS photos(
    id serial PRIMARY KEY, 
    description VARCHAR ( 500 ), 
    publisher VARCHAR ( 50 ), 
    likes NUMERIC, 
    category VARCHAR ( 50 ), 
    createdAt TIMESTAMP NOT NULL, 
    updatedAt TIMESTAMP NOT NULL
);

-- INSERT INTO photos(description, url, publisher, likes, category) VALUES ( "test", " ", "Rania", 1, "photography");
