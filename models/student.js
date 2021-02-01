// Student.js

module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        fullName: DataTypes.STRING,
        mainLanguage: DataTypes.STRING,
        subLanguage: DataTypes.STRING,
        email: DataTypes.STRING,
        linkedIn: DataTypes.STRING,
        gitHub: DataTypes.STRING,
        resume: DataTypes.STRING,
        description: DataTypes.TEXT,
    });

    Student.associate = function(models) {
        Student.belongsTo(models.Language, {
            through: "StudentLanguage",
            foreignKey: "student_id",
        });
    };
    
    return Student;
};