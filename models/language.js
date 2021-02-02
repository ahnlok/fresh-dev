// Language.js

module.exports = function(sequelize, DataTypes) {
    var Language = sequelize.define("Language", {
        language: DataTypes.STRING,
    },
    {       // This is the options object
        timestamps: false,
    });
    
    Language.associate = function(models) {
        Language.belongsToMany(models.Student, {
            through: "StudentLanguage",
            foreignKey: "language_id",
        });
    };

    return Language;
};