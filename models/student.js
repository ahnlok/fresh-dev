module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        fullName: DataTypes.STRING,
        language: DataTypes.STRING,
        email: DataTypes.STRING,
        linkedIn: DataTypes.STRING,
        gitHub: DataTypes.STRING,
        resume: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    Student.associate = function(models) {
        Student.belongsTo(models.User, {
            through: "Language",
            foreignKey: "studentId",
        });
    };
    
    return Student;
};