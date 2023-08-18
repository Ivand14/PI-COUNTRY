const { DataTypes } = require('sequelize');

//* Defino el modelo de Country

module.exports = (sequelize) => {

  sequelize.define("Country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull:false
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.STRING,
    },
    population:{
      type: DataTypes.STRING,
    },
  },{
    timestamps:false
  });
};