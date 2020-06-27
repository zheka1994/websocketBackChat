import express from "express";
import chatRouter from "./routes/chatRouter";

const app: express.Application = express();
const port: number = 8080;

app.use("/", chatRouter);

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});

// TODO добавить гит игнор
// сделать автоматический запуск скриптов и node mons