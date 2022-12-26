module.exports = app => {
    const pmlogs = require("../controllers/pmlog.controller.js");

    var router = require("express").Router();

    // Create a new Pmlog
    router.post("/", pmlogs.create);

    // Retrieve all Pmlogs
    router.get("/", pmlogs.findAll);

    // Delete all Pmlogs
    router.delete("/", pmlogs.deleteAll);

    app.use('/api/pmlogs', router);
};