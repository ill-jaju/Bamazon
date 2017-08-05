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

    userInquirer();

}


function userInquirer() { //inquirer function for user input
    inquirer.prompt([
        {
            name: "itemId",
            type: "input",
            message: "please enter item id that you desire"
        },
        {
            name: "itemAmount",
            type: "input",
            message: "how much do you want?"
        }
    ])
    .then(function(answer){

        var query = "SELECT * from products"
        connection.query(query, function(err, res){

            var j = answer.itemId - 1

            console.log('you want to buy ' + answer.itemAmount + ' of id# ' + answer.itemId );

            if (answer.itemAmount < res[j].stock_qty) {

                var stockLeft = res[j].stock_qty - answer.itemAmount

                "INSERT INTO bamazondb",
                {
                    stock_qty: stockLeft
                }

                console.log('there are ' + stockLeft + ' available' )
            } else {
                console.log('we no longer have that item');
            }
        });

    });

}