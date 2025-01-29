const express = require(`express`);
const apiRoute = express.Router();
const getInfo = require(`../controllers/api.controller.js`);

apiRoute.get("/hng12", getInfo);

module.exports = apiRoute;
