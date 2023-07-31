CREATE DATABASE restaurant_react;

USE restaurant_react;

CREATE TABLE menu (
    id integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    price integer,
    description text,
    image text,
    sale integer
);

INSERT INTO menu (name, price, description, image, sale) VALUES ("Makanan 1", 20000, "enak", "image.png", 20);
