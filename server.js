//how to make it so the curser is an arrow when you click on a team name.  Currently set as a text curser.
//couldnt figure out how to add a player to the player model, any insight would be appreciated for this one!

const express = require("express");
const app = express();
const { syncAndSeed } = require("./db/postgres_info.js");
const path = require("path");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/public/css", express.static(path.join(__dirname, "public/css")));
app.use("/public/pics", express.static(path.join(__dirname, "public/pics")));

app.use("/", require("./routers/league_model_router.js"));
app.use("/", require("./routers/team_model_router.js"));
app.use("/", require("./routers/player_model_router.js"));
app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.port || 2001;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
