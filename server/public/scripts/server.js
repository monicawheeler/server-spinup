// Creates the express app and tells it to listen on given port
const express = require('express');
const app = express();
const port = 2828;

app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('server up on port:', port);
});