const db = require("../models");
const Pmlog = db.pmlogs;
const Op = db.Sequelize.Op;

// Create and Save a new Pmlog
exports.create = (req, res) => {


    // Create a Pmlog
    const pmlog = {
        sensorId: req.body.sensorId,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        pm2P5: req.body.pm2P5,
        timestamp: req.body.timestamp,
    };

    // Save Pmlog in the database
    Pmlog.create(pmlog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pmlog."
            });
        });
};


exports.deleteAll = (req, res) => {
    Pmlog.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Pmlogs were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all pmlogs."
            });
        });
};

exports.findAll = (req, res) => {


    Pmlog.findAll({ })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving pmlogs."
            });
        });
};