import express from "express";

export function initWebSocketConnection(request: express.Request, response: express.Response): void {
    response.send("WebSocket connection open");
}