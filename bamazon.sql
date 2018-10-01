DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT(50) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("charger", "eletronics", 10.5, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("USB", "eletronics", 5.65, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("obama biography", "books", 11.56, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("the story of cosmos", "books", 18.78, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog food", "pet supplies", 4.5, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("snacks", "amazonFresh", 7.68, 167);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("golf driver", "sports", 80, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yoga mat", "sports", 19.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "eletronics", 90, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vynil", "music", 45.87, 89);

SELECT * FROM products;