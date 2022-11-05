import {DataTypes} from "sequelize"
import {sequelize} from '../database/database.js'

export const Transferencia = sequelize.define('transferencias', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
emisor: {
    type: DataTypes.INTEGER,
    allowNull: false
},
receptor: {
    type: DataTypes.INTEGER,
    allowNull: false
},
monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {min: 0}
},
fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
    
},


}, {timestamps:false})