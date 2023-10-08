import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { refreshToken } from '../controllers/userController';

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true
    }
    },
    {
        timestamps: false,
    }
        
)
