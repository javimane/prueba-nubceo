import { DataTypes } from "sequelize"
import  sequelize  from "../db/connection"

export const Episode = sequelize.define(
 "Episode",
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
      date: {
        type: DataTypes.DATE,
      },
      
      
   },
   {
    timestamps: false,
   }
)
//Episode.sync()