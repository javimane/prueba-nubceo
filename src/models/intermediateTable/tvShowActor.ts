import { DataTypes } from "sequelize"
import  sequelize  from "../../db/connection"
import { Actor } from "../actor"
import { Movie } from "../movie"
import { TvShow } from "../tvshow"

export const TvShowActor = sequelize.define(
    "TvShowActor",
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
  