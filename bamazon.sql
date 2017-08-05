drop database if exists bamazondb;

create database bamazondb;

use bamazondb;

create table products (
    item_id int not null auto_increment,
    product_name varchar(100) NULL,
    department_name varchar(100) NUll,
    price decimal(10,2) NULL,
    stock_qty int NULL,
    primary key (item_id)
);

insert into products (product_name, department_name, price, stock_qty)
values ('potion', 'recovery', 50.00, 50);

insert into products (product_name, department_name, price, stock_qty)
values ('smoke bomb', 'support', 100.00, 40);

insert into products (product_name, department_name, price, stock_qty)
values ('impaler', 'debuff', 500.00, 10);

insert into products (product_name, department_name, price, stock_qty)
values ('molotov', 'attack', 400.00, 21);

insert into products (product_name, department_name, price, stock_qty)
values ('vagyrisk claw', 'instant-death', 1000.00, 5);

insert into products (product_name, department_name, price, stock_qty)
values ('grenade', 'non-elemental', 80.00, 30);

insert into products (product_name, department_name, price, stock_qty)
values ('gysahl greens', 'field', 100.00, 99);

insert into products (product_name, department_name, price, stock_qty)
values ('power source', 'stat-upgrade', 1000.00, 17);

insert into products (product_name, department_name, price, stock_qty)
values ('buster sword', 'weapon', 1.00, 1);

insert into products (product_name, department_name, price, stock_qty)
values ('bangle', 'armor', 100.00, 1);