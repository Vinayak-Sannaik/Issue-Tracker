const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/db';

// Set the 'strictQuery' option to 'false' to suppress the warning
mongoose.set('strictQuery', false);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
db.once('open', () => {
  console.log("Connected to DB!");
});

module.exports = db;