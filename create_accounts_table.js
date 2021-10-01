/*
TO DO:
-----
READ ALL COMMENTS AND REPLACE VALUES ACCORDINGLY
*/

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "be68850fd23974", // replace with the database user provided to you
  password: "637262aa", // replace with the database password provided to you
  database: "heroku_dd701187b5b7058", // replace with the database user provided to you
  port: 3306
});

con.connect(function(err) {
  if (err) {
    throw err;
  };
  console.log("Connected!");
  var sql = `CREATE TABLE tbl_accounts(acc_id INT NOT NULL AUTO_INCREMENT,
                                       acc_name VARCHAR(20),
                                       acc_login VARCHAR(20),
                                       acc_password VARCHAR(50), PRIMARY KEY (acc_id))`;
  con.query(sql, function(err, result) {
    if(err) {
      throw err;
    }
    console.log("Table created");
  });
});
