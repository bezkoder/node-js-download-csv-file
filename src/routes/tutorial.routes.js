const express = require("express");
const router = express.Router();
const csvController = require("../controllers/tutorials/csv.controller");

let routes = (app) => {
  router.get("/download", csvController.download);

  app.use("/api/csv", router);
};

module.exports = routes;
