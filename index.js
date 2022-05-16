// importing express
const express = require("express");
const UserRouter = require("./routers/UserRouter");//import userRouter here
const cors=require("cors")//for allowing contents
// initialize express
const app = express(); //for userrouter

// defining port
const port = 5000;
//for reading json data
app.use(express.json());
//for allowing frontend
app.use(cors({origin:["http://localhost:3000"]})); //15 april // for allowing contents//yaha par localhost 3000 isliye h kyoki frontend ko allow karna h

// middleware
app.use("/user", UserRouter);

// endpoint or route
app.get("/", (req, res) => {
  res.send("you got a reponse");
});

app.get("/home", (req, res) => {
  res.send("you have reached home");
});

app.get("*", (req, res) => {
  res.send("invalid request");
});

// starting the server //server start krta h
app.listen(port, () => {
  console.log("server started on 5000");
});