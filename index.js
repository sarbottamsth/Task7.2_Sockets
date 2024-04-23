let express = require('express');
let app = express();
let port = process.env.PORT || 3000;


// Importing the routing from the routers files
let router = require('./routers/routers');

app.use(express.static('public_html'));
app.use(express.urlencoded({ extended: false }));
// Sending router for post and get request
app.use(router);

app.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`);
});
