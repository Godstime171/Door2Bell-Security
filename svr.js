const express = require('express');
const app = express();
const http = require('http')//.Server(app);
const io = require('socket.io')(http);
const path = require('path')
// Serve the index.html file when the client accesses the root URL
// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Event handler when a client connects
io.on('connection', (socket) => {
  console.log('A client connected.');

  // Event handler to receive data from the client
  socket.on('controlData', (data) => {
    console.log('Received data from client:', data);
    // Handle the data received from the client and take appropriate actions
    // For example, you can broadcast the data to all connected clients or control other devices.
    io.emit('dataFromServer', data); // Optionally, send data back to the Johnny-Five client (e.g., LED control commands)
  });

  // Event handler when a client disconnects
  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });
});

const port = 3301; // Set the port you want to use for the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
