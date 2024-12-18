const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'mysql',  // Use 'mysql' as the service name
    user: 'root',
    password: 'password',
    database: 'orders'
  });

const connectDB = async () => {
    try {
        await connection.connect((err) => {
        if (err) {
             console.error('MySQL connection error:', err);
        } else {
        console.log('MySQL connected...');
    }});
    console.log('MySQL connected for Order Service');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = { connectDB };