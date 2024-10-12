import express from "express";
import controller from "../Controllers/room.js";

const router = express.Router();

router.post("/new-room", controller.createRoom);
router.get("/rooms", controller.displayRooms);
router.post("/:roomCode/add-message", controller.addMessageToRoom);



export default router;