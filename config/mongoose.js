const mongoose = require('mongoose');
// const url = 'mongodb://0.0.0.0:27017/db';
const url = 'mongodb+srv://root:C581Vxk7HrfsIKgQ@cluster0.ahwe9q0.mongodb.net/';
// Set the 'strictQuery' option to 'false' to suppress the warning
mongoose.set('strictQuery', false);
const db = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
db();
module.exports = mongoose.connection;
