// importing from database
let { client } = require('../dbConnection');


// Getting the watch items from item parent directory in database
let collection = client.db("item").collection("watch");

module.exports = { collection };
