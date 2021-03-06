import dotenv from "dotenv";
import articleRouter from "./Router/articleRouter.js";
import userRouter from "./Router/userRouter.js"
import express from "express";
import database from "./lib/database.js";
import errorHandling from "./Middleware/errorHandling.js";
import authenticationRouter from "./Router/authenticationRouter.js";
import verifyToken from "./Middleware/verifyToken.js";
// import TokenHandler from "./lib/token.js";
// import verifyRouter from "./Router/verifyRouter.js";

dotenv.config();

database.init();


const server = express();

server.listen(process.env.PORT, () => {

    console.log("server is listening");
})

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use("/article", articleRouter);
server.use("/users", verifyToken, userRouter);
server.use("/authentication", authenticationRouter);
// server.use("/verify", verifyRouter);

server.use(errorHandling);

// server.get("/articles", async(req, res) => {

//     const articles = "article";
//     res.send(articles);
// });

