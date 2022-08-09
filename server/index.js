const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");

// 몽고 DB 연결, 실패시 에러 출력
mongoose
  .connect(
    "mongodb+srv://jisoo:jisoo@boilerplate.jfgm4sm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connectd..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
