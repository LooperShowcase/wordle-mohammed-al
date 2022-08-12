const express = require("express");
const wordle = "pizza";
const server = express();

server.get("/guess/:word", (req, res) => {
  const userGuess = req.params.word;
  let Result = [];
  for (let i = 0; i < userGuess.length; i++) {
    let ch = userGuess[i];
    if (wordle[i] == ch) {
      Result.push("green");
    } else if (wordle.includes(ch)) {
      Result.push("yellow");
    } else {
      Result.push("gray");
    }
  }
  res.json(Result);
});
server.use(express.static("public"));

server.listen(3000, () => {
  console.log("server is woky :)");
});





