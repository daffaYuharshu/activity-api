const express = require("express");
const cors = require("cors");
const router = require("./routes/router.js");
const db = require("./config/Database.js");
const Users = require("./models/Users.js");
const app = express();
const port = 3000;

async function startServer() {
  try {
    await db.authenticate();
    console.log("Database Connected...");
    await Users.sync();
  } catch (error) {
    console.error(error);
  }

  app.use(cors());
  app.use(express.json());
  app.use(router);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
