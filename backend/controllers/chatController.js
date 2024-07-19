// server/controllers/chatController.js
const Message = require('../models/Message');

// Get all messages for a room
exports.getMessages = async (req, res) => {
  const { roomId } = req.params;

  try {
    const messages = await Message.find({ roomId }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Save a new chat message
exports.sendMessage = async (req, res) => {
  const { roomId, userId, content } = req.body;

  try {
    const message = new Message({ roomId, userId, content });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
