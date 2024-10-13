import express from "express";
import roomRouter from "./Routes/room.js";
import cors from "cors";

const app = express();
const rooms = new Map();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    req.rooms = rooms; 
    next();
});

app.use("/room", roomRouter);

app.listen(3000, () => {
    console.log("Connected on Port 3000");
});
