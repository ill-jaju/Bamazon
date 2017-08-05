var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MEclass@2003',
    database: 'bamazondb'
});

connection.connect(function(err){
    if(err) throw err;

    itemDisplay();
});

function itemDisplay() { //function to display available items
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;

        for (var i = 0; i < res.length; i++){ //for loop that goes through results and displays proper info
            console.log('id# ' +  res[i].item_id + ' | ' + res[i].product_name + ' |  '  + res[i].department_name + ' | cost - ' + res[i].price + ' | stock - ' + res[i].stock_qty + ' | ');
            console.log('-------------------------------------------------------');
        }
    });

}
