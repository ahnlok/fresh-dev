// Student.js

module.exports = function(sequelize, DataTypes) {
    // variablename.define(modelname:string, attrib:obj, options:obj)
    var Student = sequelize.define("Student", {
        fullName: DataTypes.STRING,
        mainLanguage: DataTypes.STRING,
        subLanguage: DataTypes.STRING,
        school: DataTypes.STRING,
        email: DataTypes.STRING,
        linkedIn: DataTypes.STRING,
        gitHub: DataTypes.STRING,
        resume: DataTypes.STRING,
        description: DataTypes.TEXT,
    },
    {       // This is the options object
        timestamps: false,
    });

    Student.associate = function(models) {
        Student.belongsToMany(models.Language, {
            through: "StudentLanguage",
            foreignKey: "student_id",
        });
    };
    
    return Student;
};