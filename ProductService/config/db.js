const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.POSTGRES_URI || 'postgresql://postgres:password@postgres:5432/products'
  });

const connectDB = async () => {
    try {
        await client.connect()
        .then(() => console.log('PostgreSQL connected...'))
        .catch(err => console.error('PostgreSQL connection error:', err));
        console.log('PostgreSQL connected for Product Service');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = { connectDB };