import { DataTypes } from "sequelize"
import  sequelize  from "../../db/connection"
import { Episode } from "../episode"
import { Actor } from "../actor"

export const EpisodeActor = sequelize.define(
    "EpisodeActor",
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
 