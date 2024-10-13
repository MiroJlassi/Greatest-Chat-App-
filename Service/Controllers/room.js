//import Room from "../Models/room.js";

const createRoom = async (req, res) => {
    try {
        const { roomCode } = req.body;
        const rooms = req.rooms;

        if (rooms.has(roomCode)) {
            return res.status(400).json({ message: "Room already exists" });
        }

        rooms.set(roomCode, []);
        return res.status(201).json({ message: "Room created", roomCode });
    } catch (err) {
        console.error(err);
        res.status(500).json("ERROR: Cannot create room");
    }
};

const displayRooms = async (req, res) => {
    try {
        const rooms = req.rooms;
        const roomList = Array.from(rooms).map(([roomCode, discussions]) => {
            return {
                roomCode: roomCode,
                discussions: discussions
            };
        });

        return res.status(200).json({ rooms: roomList });
    } catch (err) {
        console.error(err);
        res.status(500).json("ERROR: Cannot display rooms");
    }
};

const getMessages = async (req, res) => {
    try {
        const { roomCode } = req.params;
        const rooms = req.rooms;

        if (!rooms.has(roomCode)) {
            return res.status(404).json({ message: "Room not found" });
        }

        const room = rooms.get(roomCode);
        return res.status(200).json({ messages: room });
    } catch (err) {
        console.error(err);
        res.status(500).json("ERROR: Cannot get messages");
    }
};

const sendMessage = async (req, res) => {
    try {
        const { roomCode } = req.params;
        const { message } = req.body;
        const rooms = req.rooms;

        if (!message || message.trim() === "") {
            return res.status(400).json({ message: "Message content is required" });
        }

        if (!rooms.has(roomCode)) {
            return res.status(404).json({ message: "Room not found" });
        }

        const discussions = rooms.get(roomCode);
        discussions.push(message);
        rooms.set(roomCode, discussions);

        return res.status(201).json({ message: "Message added", roomCode, discussions });
    } catch (err) {
        console.error(err);
        res.status(500).json("ERROR: Cannot send message");
    }
};

export default {
    createRoom,
    displayRooms,
    getMessages,
    sendMessage,
};
