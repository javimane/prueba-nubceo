import { DataTypes } from "sequelize"
import  sequelize  from "../db/connection"

export const Actor = sequelize.define(
 "Actor",
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
//Actor.sync()