let { collection } = require('../models/watch');


// Function to add new watch
async function addWatchItem(req, res) {
  let item_name = req.body.item_name;
  let item_color = req.body.item_color;
  let item_image_url = req.body.item_image_url;
  let item_description = req.body.item_description;
  
  try {
    await collection.insertOne({ item_name, item_color, item_image_url, item_description });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}


// Function to get all watches and sending them into api/items routes
async function getWatchItems(req, res) {
  try {
    let data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { addWatchItem, getWatchItems };
