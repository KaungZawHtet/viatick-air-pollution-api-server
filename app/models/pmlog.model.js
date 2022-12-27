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
        pm2P5: {
            type: Sequelize.DOUBLE
        },
        timestamp: {
            type: Sequelize.DATE
        }
    });

    return Pmlog;
};