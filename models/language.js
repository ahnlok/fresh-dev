module.exports = function(sequelize, DataTypes) {
   var Language = sequelize.define (
    "Language",
    {
        userId: DataTypes.INTEGER,
        studentId: DataTypes.INTEGER,
    },
    { timestamps: false }
   );
   
   return Language;
};