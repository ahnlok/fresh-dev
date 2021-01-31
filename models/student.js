module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Student.associate = function(models) {
        Student.belongsTo(models.User, {
            through: "Language",
            foreignKey: "userId",
        });
    };
    
    return Student;
}