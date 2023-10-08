import { DataTypes } from "sequelize"
import  sequelize  from "../db/connection"
import { Movie } from "./movie"
import { Episode } from "./episode"

export const Director = sequelize.define(
 "Director",
   {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.TINYINT,
      },
      gender: {
        type: DataTypes.STRING,
        
      },
      
   },
   {
    timestamps: false,
   }
)
/*Director.hasMany(Movie,{
    foreignKey:'directorId',
    sourceKey: 'id',
})
Movie.belongsTo(Director, {
    foreignKey: "directorId",
    targetKey: "id",
  });*/
