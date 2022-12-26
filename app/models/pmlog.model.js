module.exports = (sequelize, Sequelize) => {
    const Pmlog = sequelize.define("pmlog", {
        sensorId: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.STRING
        },
        longitude: {
            type: Sequelize.STRING
        },
        pm: {
            type: Sequelize.INTEGER
        },
        timestamp: {
            type: Sequelize.INTEGER
        }
    });

    return Pmlog;
};