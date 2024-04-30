let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
// Creating http variable  to bind with app and send to socket to bind with http server
let http = require('http').createServer(app);
let io = require('socket.io')(http);




// Importing the routing from the routers files
let router = require('./routers/routers');


app.use(express.static('public_html'));
app.use(express.urlencoded({ extended: false }));
// Sending router for post and get request
app.use(router);

io.on('connection', (socket) => {
  console.log("User Connected");
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
  setInterval(() => {
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000)
})

http.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`);
});
