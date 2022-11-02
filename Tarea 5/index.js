require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const database = require("./database");
const userRoutes = require("./users/routes");

app.get("", async (req, res) => {
  res.send("Api works");
});

app.use("/users", userRoutes);

database
  .connect()
  .then((client) => {
    const db = client.db("Users");
    database.db(db);

    app.listen(port, () => {
      console.log("app is running in port " + port);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database");
  });
