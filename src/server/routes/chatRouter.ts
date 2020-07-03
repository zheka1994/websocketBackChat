import express from "express";

import * as ChatController from "../controllers/chatController";

const chatRouter: express.Router = express.Router();

chatRouter.use("/chat", ChatController.getChatPage);

export default chatRouter;