import { DataTypes } from "sequelize"
import  sequelize  from "../../db/connection"
import { Actor } from "../actor"
import { Movie } from "../movie"

export const MovieActor = sequelize.define(
    "MovieActor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
    }
  )
 