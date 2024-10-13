import express from "express";
import controller from "../Controllers/room.js";

const router = express.Router();

router.post("/new-room", controller.createRoom);
router.post("/join-room", controller.joinRoom);
router.get("/rooms", controller.displayRooms);
router.get("/messages/:roomCode", controller.getMessages);
router.post("/message/:roomCode", controller.sendMessage);

export default router;