const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../config.env') });

const app = express();

const mongoUri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.l65nt.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo instance');
});

mongoose.connection.on('error', err => {
  console.error('Error connection to Mongo:', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
