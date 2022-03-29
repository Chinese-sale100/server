const mongoose = require("mongoose");
const express = require("express");
const winningRoute = require("./routes/winning");
const userRoute = require("./routes/user");
const app = express();
mongoose.connect("mongodb://localhost:27017/chinese-sale100")
    .then(() => { console.log("mongo db connected"); })
    .catch(er => { console.log(er) });

app.use(express.json())
app.use("/winning", winningRoute)
app.use("/user", userRoute)
app.listen(4500, () => { console.log("waiting") })