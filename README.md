# Bamazon

A CLI (command line interface) app that simulates an Amazon-like storefront.

### Prerequisites / Technologies Used

- MySQL
- NodeJS

### Installing

-'npm install' from Terminal/Bash/command line

### Customer Application

Working Example -
>![working example](https://github.com/jamie-jessi/Bamazon/blob/master/images/hqgif.gif)

1. Open the Terminal and use command `node bamazonCustomer.js` . A table of available products will be displayed with a prompt.
>![initial](https://github.com/jamie-jessi/Bamazon/blob/master/images/start.png)

2. Once the customer enters the item id that he/she wishes to purchase, a second prompt will be displayed. 
>![prompts](https://github.com/jamie-jessi/Bamazon/blob/master/images/userPrompts.png)

3. Upon answering the second prompt, one of the following will occur, depending on the user input and amount in stock.
>
>If there is sufficient stock, the amount available will be shown, before and after purchase, with total cost shown.
>![prompts](https://github.com/jamie-jessi/Bamazon/blob/master/images/purchaseGo.png)
>
>If there is not enough in stock, the user order will not go through.
>![prompts](https://github.com/jamie-jessi/Bamazon/blob/master/images/purchaseNo.png)

4. The table will update itself with the proper stock quantity after each customer purchase prompt.
>![prompts](https://github.com/jamie-jessi/Bamazon/blob/master/images/updatedTable.png)

### Version Notes
1.0 'working challenge 1'  
meets the minimum requirements. need to add inquirer prompt/confirmation for purchases.  