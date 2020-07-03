import express from "express";
import expressWs from "express-ws";

import chatRouter from "./server/routes/chatRouter";

const app = expressWs(express()).app;
app.use(express.static("static"));
app.use("/", chatRouter);
app.ws("/", (ws, req) => {
    ws.on("message", (msg) => {
        console.log(msg);
    })
})

app.listen(8080, () => {
    console.log("App started");
});