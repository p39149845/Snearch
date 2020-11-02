var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var con = mysql.createPool({
  host: "25.58.237.58",
  port: '11616',
  user: "poom",
  password: "12345",
  database: 'advcpe'
});

const app = express();

app.use(cors())

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));


con.getConnection(function (err, connection) {
  connection.release();
  if (err) throw err;
  console.log("Connected!");
});


// app.get('/product', function (req, res) {
//   // Connecting to the database.

//   con.getConnection(function (err, connection) {
//       if (err) throw err; // not connected!

//       // Use the connection
//       con.query("SELECT promotion_name FROM promoted where product_id = 1 ", function (error, results, fields) {
//           // When done with the connection, release it.
//           connection.release();

//           // Handle error after the release.
//           if (error) throw error;
//           res.send(JSON.stringify(results));
//           // Don't use the connection here, it has been returned to the pool.
//       });
//   });


// });

// app.get('/product', function (req, res) {
//   // Connecting to the database.

//   con.getConnection(function (err, connection) {
//       if (err) throw err; // not connected!

//       // Use the connection
//       con.query("SELECT name,color,any,price FROM product where color = 'เขียว' and any = 'แท่ง' ", function (error, results, fields) {
//           // When done with the connection, release it.
//           connection.release();

//           // Handle error after the release.
//           if (error) throw error;
//           res.send(JSON.stringify(results));
//           // Don't use the connection here, it has been returned to the pool.
//       });
//   });


// });

app.get('/product', function (req, res) {
  // Connecting to the database.

  con.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    con.query("SELECT * FROM product", function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;
      res.send(JSON.stringify(results));
      // Don't use the connection here, it has been returned to the pool.
    });
  });


});

// app.get('/product', function (req, res) {
//   // Connecting to the database.

//   con.getConnection(function (err, connection) {
//       if (err) throw err; // not connected!

//       // Use the connection
//       con.query("SELECT name,color,any FROM product product_id = '1' ", function (error, results, fields) {
//           // When done with the connection, release it.
//           connection.release();

//           // Handle error after the release.
//           if (error) throw error;
//           res.send(JSON.stringify(results));
//           // Don't use the connection here, it has been returned to the pool.
//       });
//   });


// });

// app.get('/promotion_insert', function (req, res) {
//   // Connecting to the database.

//   con.getConnection(function (err, connection) {
//     if (err) throw err; // not connected!

//     // Use the connection
//     var sql = "INSERT INTO promoted (promotion_name, product_id, promotion_id) VALUES ('test',1 ,1)";
//     //     con.query(sql, function (err, result) {
//     // When done with the connection, release it.
//     connection.release();

//     // Handle error after the release.
//     if (error) throw error;
//     res.send(JSON.stringify(results));
//     // Don't use the connection here, it has been returned to the pool.
//   });
// });

app.listen(8080, () => {
  console.log('Go to http://localhost:8080/product so you can see the data.');
});