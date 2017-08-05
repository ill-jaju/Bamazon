var mysql = require('mysql'); //requirements in order to function
var inquirer = require('inquirer');

var query = "SELECT * from products" //global variable so i dont have to type again

var connection = mysql.createConnection({ //configuration to connect to mysql database
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

    userInquirer(); //displays inquirer prompt
    });
}


function userInquirer() { //inquirer function for user input
    inquirer.prompt([
        {
            name: "itemId",
            type: "input",
            message: "please enter the item id that you wish to purchase"
        },
        {
            name: "itemAmount",
            type: "input",
            message: "how many do you want?"
        }
    ])
    .then(function(answer){

        connection.query(query, function(err, res){

            var j = answer.itemId - 1 //makes user response into a variable. -1 because it starts at '0'

            console.log('we have ' + res[j].stock_qty + ' available of id# ' + answer.itemId);

            if (answer.itemAmount <= res[j].stock_qty) { //if user request for purchase is less than or equal to current quanitity

                var stockLeft = res[j].stock_qty - answer.itemAmount //makes a variable of stock left after user purchase

                connection.query(
                    "UPDATE products SET ? WHERE ?",  //updates sql table with proper values after purchase
                    [
                        {
                            stock_qty: stockLeft
                        },
                        {
                            item_id: answer.itemId
                        }
                    ]
                );
                console.log('there are ' + stockLeft + ' available, aftter your purchase.' );
                console.log('your total is $' + answer.itemAmount * res[j].price ); //displays amount individual owes by price x quantity


                itemDisplay(); //displays table

            } else {
                console.log('we do not have enough in stock. your order did not go through.');
                
                itemDisplay(); //displays table
            }
        });

    });

}