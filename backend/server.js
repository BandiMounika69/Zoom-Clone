const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const peerServer = require('./config/peerServer');

require('dotenv').config();

connectDB();



// Middleware
app.use(express.json());
app.use(cors());

// Routes
const chatRoute = require('./routes/chat');
const authRoute = require('./routes/auth');

const roomsRoute = require('./routes/rooms');
const usersRoute = require('./routes/users');
const streamRoute = require('./routes/stream');

app.use('/api/auth', authRoute);
app.use('/api/chat', chatRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/stream', streamRoute);

// PeerJS server
peerServer(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));