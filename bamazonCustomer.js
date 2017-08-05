var mysql = require('mysql');
var inquirer = require('inquirer');
var query = "SELECT * from products"

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MEclass@2003',
    database: 'bamazondb'
});

connection.connect(function(err){
    if(err) throw err;

    console.log("connected as " + connection.threadId);
    itemDisplay();
});

function itemDisplay() { //function to display available items
    connection.query(query, function(err, res){
        if (err) throw err;

        for (var i = 0; i < res.length; i++){ //for loop that goes through results and displays proper info
            console.log('id# ' +  res[i].item_id + ' | ' + res[i].product_name + ' |  '  + res[i].department_name + ' | cost - ' + res[i].price + ' | stock - ' + res[i].stock_qty + ' | ');
            console.log('-------------------------------------------------------');
        }

    userInquirer();
    });
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

        connection.query(query, function(err, res){

            var j = answer.itemId - 1

            console.log('we have ' + res[j].stock_qty + ' available of id# ' + answer.itemId);

            if (answer.itemAmount <= res[j].stock_qty) {

                var stockLeft = res[j].stock_qty - answer.itemAmount

                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_qty: stockLeft
                        },
                        {
                            item_id: answer.itemId
                        }
                    ]
                )
                console.log('there are ' + stockLeft + ' available aftter your purchase.' )
                console.log('your total is $' + answer.itemAmount * res[j].price )


                itemDisplay();

            } else {
                console.log('we no longer have that item');
                
                itemDisplay();
            }
        });

    });

}