// Language.js

module.exports = function(sequelize, DataTypes) {
    var Language = sequelize.define("Language", {
        language: DataTypes.STRING,
    });
    
    Language.associate = function(models) {
        Language.belongsToMany(models.Student, {
            through: "StudentLanguage",
            foreignKey: "language_id",
        });
    };

    return Language;
};