import express from "express";
import { protectRoute } from "../middleware/authmiddleware.js";
import { getMessages, getUserForSiderbar,sendMessage } from "../controllers/messagecontroller.js";

const router =express.Router();

router.get("/users", protectRoute,getUserForSiderbar);
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessage);

export default router;