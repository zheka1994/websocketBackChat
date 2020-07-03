import express from "express";

export function getChatPage(request: express.Request, response: express.Response): void {
    response.send("test chat controller")
}