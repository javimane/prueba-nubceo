import { DataTypes } from "sequelize"
import  sequelize  from "../db/connection"
import { Director } from "./director"
import { Actor } from "./actor"

export const Movie = sequelize.define(
 "Movie",
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
      date: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
        
      },
      
   },
   {
    timestamps: false,
    }
)
