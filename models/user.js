// User.js

var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password CANNOT be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Before a User is created, we will automatically has their password
    User.addHook("beforeCreate", function(user)
    {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    // Associate User
    // User.associate = function (models) {
    //     User.belongsToMany(models.Student, {
    //         through: "Language",
    //         foreignKey: "userId",
    //     });
    // }
    return User;
};