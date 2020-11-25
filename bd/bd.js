const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
host: 'bds1wrk4lydq1t0r2ysa-mysql.services.clever-cloud.com',
  user: 'ucs6zkud6ls4she0',
  password: '9sVd6pYHrxzNX4e3qooX',
  database: 'bds1wrk4lydq1t0r2ysa',
  multipleStatements: true


});

mysqlConnection.connect((error) =>{
    if (error){
        console.error(error);
        return;
    } else {
        console.log('Base de datos, se conectó con éxito');
    }
});

module.exports = mysqlConnection;

