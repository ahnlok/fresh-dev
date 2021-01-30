module.exports = function(sequelize, DataTypes) {
   var Language = sequelize.define ("Language", {
       language: DataTypes.STRING
   });

   Language.associate = function(models) {
       Language.hasMany(models.Student, {
           onDelete: "cascasde"
       });
   };
   return Language;
};