// server/controllers/roomController.js
const Room = require('../models/Room');

// Create a new room
exports.createRoom = async (req, res) => {
  const { name, admin } = req.body;

  try {
    const room = new Room({ name, admin });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all rooms
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
