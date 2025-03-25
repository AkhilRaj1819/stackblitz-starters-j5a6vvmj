const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();
const port = 3010;

app.use(express.static('static'));
const router = require('./router')
app.use('',router);
app.listen(port, async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to database");
  } catch (error) {
    
  }
  console.log(`Example app listening at http://localhost:${port}`);
});
