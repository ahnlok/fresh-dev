// StudentLanguage.js

// This will bring out the listed posts information
module.exports = function (sequelize, DataTypes) {
    var StudentLanguage = sequelize.define(
        "StudentLanguage", {
            student_id: DataTypes.INTEGER,
            language_id: DataTypes.INTEGER,
        }, {
            timestamps: false
        }
    );

    return StudentLanguage;
};