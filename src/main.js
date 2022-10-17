import RouterApp from "./routes/router.routes.js";
import express from "express";
import bodyparser from "body-parser";
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", RouterApp);

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
    console.clear();
    console.log("Server running");
})