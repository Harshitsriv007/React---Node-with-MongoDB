const express = require("express");
const mongoose = require("mongoose");
// const route = require('./datamanage');

const route = require('./server');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to mongodb')
})