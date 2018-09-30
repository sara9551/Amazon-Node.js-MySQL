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

// function which prompts the user with two questions
//Product ID and Product Quantity
function readproducts() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What is the item the ID of the item you would like to purchase?"
      },
      {
        name: "stock_quantity",
        type: "input",
        message: "How many of these items would you like?"
      }
    ])
    // THEN it concole logs ("writes") the users answers
    .then(function (ans) {
      if (ans.item_id) {
        console.log(ans.item_id);
      }
      else {
        console.log(ans.stock_quantity);
      }
    })
  displayeverything();
};

function displayeverything() {
  var query = connection.query("SELECT * FROM products", function (_err, res) {
    for (var i = 0; i < res.length; i++) {
      if (stock.stock_quantity < parseInt(stock.quan)) {
        inquirer
          .prompt(
            // update db
            connection.query(
              "UPDATE products SET ?",
              [
                {
                  stock_quantity: stock.quan
                },
              ],
                console.log(query.stock_quantity)
              )
          )
      }
    }
  })
};