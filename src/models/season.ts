import { DataTypes } from "sequelize"
import  sequelize  from "../db/connection"
import { Episode } from "./episode"

export const Season = sequelize.define(
 "Season",
   {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      date: {
        type: DataTypes.DATE,
        
      },
      
   },
   {
    timestamps: false,
   }
)
