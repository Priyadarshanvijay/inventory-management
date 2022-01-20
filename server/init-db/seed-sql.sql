CREATE DATABASE inventory_priyadarshan_vijay;

\c inventory_priyadarshan_vijay;

DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(256) NOT NULL
);

CREATE TABLE companies(
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(128) NOT NULL,
  city VARCHAR(64) NOT NULL
);

CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  item_name VARCHAR(256) NOT NULL,
  image TEXT,
  category_id INTEGER,
  FOREIGN KEY (category_id) references categories(id)
);

CREATE TABLE stock(
  id SERIAL PRIMARY KEY,
  item_id integer NOT NULL,
  incoming_quantity INTEGER NOT NULL,
  current_quantity INTEGER NOT NULL,
  supplier_id INTEGER NOT NULL,
  manufacturer_id INTEGER NOT NULL,
  supply_date DATE NOT NULL,
  stock_over_date DATE,
  FOREIGN KEY (item_id) references items(id) ON DELETE CASCADE,
  FOREIGN KEY (supplier_id) references companies(id),
  FOREIGN KEY (manufacturer_id) references companies(id)
);

INSERT INTO categories(category_name) VALUES('Food');
INSERT INTO categories(category_name) VALUES('Bath and Beauty');

INSERT INTO companies(company_name, city) VALUES('ABC Inc.', 'New York');
INSERT INTO companies(company_name, city) VALUES('Columbia Inc.', 'Washington DC');

INSERT INTO items(item_name, image, category_id) VALUES('onion Rings', 'www.abc.com/img', 1);
INSERT INTO items(item_name, image, category_id) VALUES('FaceWash', 'www.abc.com/img2', 2);

INSERT INTO stock(item_id, incoming_quantity, current_quantity, supplier_id, manufacturer_id, supply_date) VALUES(1, 10, 5, 1, 1, current_date);
INSERT INTO stock(item_id, incoming_quantity, current_quantity, supplier_id, manufacturer_id, supply_date) VALUES(1, 15, 15, 1, 1, current_date);
INSERT INTO stock(item_id, incoming_quantity, current_quantity, supplier_id, manufacturer_id, supply_date) VALUES(2, 100, 100, 1, 1, current_date);
INSERT INTO stock(item_id, incoming_quantity, current_quantity, supplier_id, manufacturer_id, supply_date) VALUES(1, 100, 15, 1, 2, current_date);