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

function itemDisplay() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;

        console.log(res)


    })

}
