USE db_project;

-- CREATE TABLE inventory(
-- 	item_name VARCHAR(255) NOT NULL,
--     quantity INT,
--     provider VARCHAR(255),
--     PRIMARY KEY (item_name)
-- );
CREATE TABLE 	dictates(
	dish_name VARCHAR(255) NOT NULL,
    item_nae VARCHAR(255) NOT NULL,
    PRIMARY KEY (dish_name)
);

CREATE TABLE catalogue(
	dish_name VARCHAR(255) NOT NULL,
    quantity INT,
    price INT,
    type VARCHAR(255),
    PRIMARY KEY (dish_name)
);

CREATE TABLE _from(
	order_id INT NOT NULL,
    dish_name VARCHAR(255),
    quantity INT,
    PRIMARY KEY (order_id)
);

CREATE TABLE _order(
	order_id INT NOT NULL,
    table_no INT,
    total_price INT,
    PRIMARY KEY (order_id)
);

CREATE TABLE bill(
	customer_id INT,
    _date Date,
    _time Time,
    PRIMARY KEY(customer_id)
); 

CREATE TABLE incurs(
	order_id INT NOT NULL,
    customer_id INT,
    PRIMARY KEY (order_id)
);

CREATE TABLE reservation(
	customer_name VARCHAR(255),
    contact INT,
    _date DATE,
    _time TIME,
    PRIMARY KEY (customer_name)
);

CREATE TABLE gives (
	order_id INT NOT NULL,
    customer_name VARCHAR(255),
    PRIMARY KEY (order_id)
); 

CREATE TABLE emp_schedule (
	id INT NOT NULL,
    start_time INT,
    end_time INT,
    job VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE requires(
	id INT NOT NULL,
    customer_name VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
	id INT NOT NULL,
    employee_name VARCHAR(255),
    role VARCHAR(255),
    PRIMARY KEY(id)
)
