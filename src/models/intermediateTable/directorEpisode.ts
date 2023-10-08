import { DataTypes } from "sequelize"
import  sequelize  from "../../db/connection"


export const DirectorEpisode = sequelize.define(
    "DirectorEpisode",
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
 