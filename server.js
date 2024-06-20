const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Heroku sets the PORT environment variable

// Middleware to parse incoming text/plain data
app.use(express.text());

// Log endpoint
app.post('/log', (req, res) => {
    console.log(req.body); // Print the incoming log data to the console
    res.sendStatus(200); // Send OK status without any message
    res.status(200).end(); // End the response without sending any content
});

// Start the server
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
