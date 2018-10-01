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
  displayeverything();
});

// function which displays all of the items available for sale
function displayeverything() {
  // selects all from products and puts into new line
  connection.query("SELECT * FROM products" + "\n", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      // console logs all of the items available for sale using the "IDs" from SQL table
      console.log("Item ID: " + res[i].item_id + " Product Name: " + res[i].product_name + " Department Name: " + res[i].department_name + " Price: " + res[i].price + " Stock Quantity: " + res[i].stock_quantity);
    }
  });
  readproducts();

  // function which prompts the user with two questions:
  //Product ID and Product Quantity
  function readproducts() {
    inquirer
      .prompt([{
          name: "item_id",
          type: "input",
          message: "What is the item the ID of the item you would like to purchase? \n",
        },
        {
          name: "stock_quantity",
          type: "input",
          message: "How many of these items would you like?"
        }
      ])
      // THEN, it concole logs ("writes") the users answers
      .then(function (ans) {
        if (ans.item_id) {
          console.log(ans.item_id);
        } else {
          console.log(ans.stock_quantity);
        }
      })
      .then(function (_res) {
        // query the database for all items from products
        connection.query("SELECT * FROM products  WHERE ?", function (_err, res) {(
            "UPDATE products SET ?",
            [{
              stock_quantity: _res.stock
            }, ],
            console.log(query.stock_quantity)
          )
        });
      });
  }
}