const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: '!QAZ1qaz',
  database: 'work'
});
db.connect(function(err){
  if (err) throw err
})

module.exports = db;
