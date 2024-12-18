const mongoose = require('mongoose');
// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://mongodb:27017/users')
//         .then(() => console.log('MongoDB connected...'))
//         .catch(err => console.error('MongoDB connection error:', err));
//         console.log('MongoDB connected for User Service');
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };
    
// module.exports = { connectDB };
// if (process.env.NODE_ENV !== "PRODUCTION") {
    // require("dotenv").config({ path: "./.env" });
//   }


const connectDB = () => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
}

  module.exports = { connectDB };
