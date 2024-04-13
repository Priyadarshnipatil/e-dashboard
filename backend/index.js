const express = require("express");
require("./db/config");

const user = require("./db/User");
const app = express();

app.use(express.json());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(req.body);
});

app.post("/login", (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user Found" });
    }
  } else {
    req.send({ result: "No user found" });
  }
  resp.send(user);
});

app.listen(5000);
