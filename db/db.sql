DROP DATABASE db_project;
CREATE DATABASE db_project;
USE db_project;

CREATE TABLE expenditure(
    purchase_id INT AUTO_INCREMENT,
    item_name VARCHAR(255),
    _type VARCHAR(255),
    quantity INT,
    _date DATE,
    per_unit_price INT,
    _provider VARCHAR(255),
    total_price INT,
    PRIMARY KEY (purchase_id)
);
CREATE TABLE inventory(
    item_name VARCHAR(255),
    quantity INT,
    PRIMARY KEY (item_name)
);
CREATE TABLE _provider(
    item_name VARCHAR(255),
    provider_name VARCHAR(255),
    FOREIGN KEY (item_name) REFERENCES inventory(item_name)
);
CREATE TABLE catalogue(
    dish_name VARCHAR(255),
    available BOOLEAN,
    genre VARCHAR(255),
    cook_item INT,
    quantity INT,
    price INT,
    category VARCHAR(255),
    PRIMARY KEY (dish_name)
);
CREATE TABLE ingredient(
    dish_name VARCHAR(255),
    ingredient_name VARCHAR(255),
    FOREIGN KEY (dish_name) REFERENCES catalogue(dish_name)
);
CREATE TABLE _order(
    order_id INT,
    table_no INT,
    total_price INT,
    _time TIME,
    _date DATE,
    PRIMARY KEY (order_id)
);
CREATE TABLE dishes(
    order_id INT,
    dish_name VARCHAR(255),
    FOREIGN KEY (order_id) REFERENCES _order(order_id)
);
CREATE TABLE reservation(
    reservation_id INT AUTO_INCREMENT,
    customer_id VARCHAR(255),
    table_no INT,
    no_of_guest INT,
    PRIMARY KEY (reservation_id)
);
CREATE TABLE customer(
    customer_id INT,
    _name VARCHAR(255),
    contact VARCHAR(255),
    _address VARCHAR(255),
    PRIMARY KEY (customer_id)
);
CREATE TABLE bill(
    bill_id INT,
    customer_id INT,
    payment_total INT,
    payment_paid INT,
    payment_returned INT,
    _date Date,
    _time Time,
    PRIMARY KEY(bill_id)
);
CREATE TABLE item(
    bill_id INT,
    item_name VARCHAR(255),
    FOREIGN KEY (bill_id) REFERENCES bill(bill_id)
);
CREATE TABLE employee(
    employee_id INT,
    employee_name VARCHAR(255),
    _role VARCHAR(255),
    salary INT,
    supervisor VARCHAR(255),
    PRIMARY KEY(employee_id)
);
CREATE TABLE emp_schedule(
    schedule_id INT AUTO_INCREMENT,
    employee_id INT,
    start_time TIME,
    end_time TIME,
    _date DATE,
    PRIMARY KEY (schedule_id),
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
);

CREATE TABLE populates(
    purchase_id INT,
    item_name VARCHAR(255),
    FOREIGN KEY (purchase_id) REFERENCES expenditure(purchase_id),
    FOREIGN KEY (item_name) REFERENCES inventory(item_name)
);
CREATE TABLE dictates(
    item_id INT,
    dish_name VARCHAR(255),
    FOREIGN KEY (item_id) REFERENCES inventory(item_id),
    FOREIGN KEY (dish_name) REFERENCES catalogue(dish_name)
);
CREATE TABLE _from(
    dish_name VARCHAR(255),
    order_id INT NOT NULL,
    quantity INT,
    FOREIGN KEY (dish_name) REFERENCES catalogue(dish_name),
    FOREIGN KEY (order_id) REFERENCES _order(order_id)
);
CREATE TABLE gives(
    order_id INT,
    reservation_id INT,
    FOREIGN KEY (order_id) REFERENCES _order(order_id),
    FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id)
);
CREATE TABLE reserves(
    reservation_id INT,
    customer_id INT,
    _time TIME,
    _date DATE,
    FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);
CREATE TABLE pays(
    customer_id INT,
    bill_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (bill_id) REFERENCES bill(bill_id)
);
CREATE TABLE incurs(
    order_id INT,
    bill_id INT,
    FOREIGN KEY (order_id) REFERENCES _order(order_id),
    FOREIGN KEY (bill_id) REFERENCES bill(bill_id)
);
CREATE TABLE requires(
    reservation_id INT,
    schedule_id INT,
    FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id),
    FOREIGN KEY (schedule_id) REFERENCES emp_schedule(schedule_id)
);
CREATE TABLE works(
    employee_id INT,
    schedule_id INT,
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
    FOREIGN KEY (schedule_id) REFERENCES emp_schedule(schedule_id)
);

SELECT * FROM expenditure;

INSERT INTO inventory (item_name, quantity) VALUES ('rice', 5);
INSERT INTO inventory (item_name, quantity) VALUES ('lentil', 3);
INSERT INTO inventory (item_name, quantity) VALUES ('potato', 3);

INSERT INTO catalogue (
    dish_name,
    available,
    genre,
    cook_item,
    quantity,
    price,
    category
  )
VALUES (
    'Fried Rice',
    '1',
    'Chinese',
    3,
    2,
    140,
    'main dish'
  );
INSERT INTO catalogue (
    dish_name,
    available,
    genre,
    cook_item,
    quantity,
    price,
    category
  )
VALUES (
    'Chicken Curry',
    '1',
    'Indian',
    2,
    3,
    50,
    'main dish'
  );

  INSERT INTO bill (
      bill_id,
      customer_id,
      payment_total,
      payment_paid,
      payment_returned,
      _date,
      _time
    )
  VALUES (
      100,
      100,
      940,
      1000,
      60,
      '2021-08-12',
      '14:03:24'
    );

INSERT INTO item (bill_id, item_name)
VALUES (100, 'Doi Chira 2');