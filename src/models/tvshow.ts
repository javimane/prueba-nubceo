import { DataTypes } from "sequelize"
import  sequelize  from "../db/connection"
import { Season } from "./season"
import { Actor } from "./actor"
import { Episode } from "./episode"

export const TvShow = sequelize.define(
 "TvShow",
   {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      channel: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
        
      },
      
   },
   {
        timestamps: false,
    }
)
