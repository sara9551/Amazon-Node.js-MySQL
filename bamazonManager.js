var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readproducts();
})


// function which prompts the user for what action, from the menu, they would like to take
function readproducts() {
    inquirer.prompt([
		{
			type: "list",
			name: "option",
            message: "Select an option:",
            // these are the options the user will see in the menu and that he will be able to "click"
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ])
    };


