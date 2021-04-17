"use strict";

const functions = require("firebase-functions");

const boof = functions.https.onRequest((req, res) => {
  functions.logger.info("boof!", {structuredData: true});
  return res.send("Boof!");
});

module.exports = boof;
