import {DataTypes} from "sequelize"
import {sequelize} from '../database/database.js'
import { Transferencia } from "./Transferencia.js";

export const Usuario = sequelize.define('usuarios', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
nombre: {
    type: DataTypes.STRING,
    allowNull: false
},
balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    
    validate: {min: 0}
}

}, {timestamps:false})

Usuario.hasMany(Transferencia, {
    foreignKey: 'emisor',
    sourceKey: 'id'
})

Transferencia.belongsTo(Usuario, {
    foreignKey: 'emisor',
    targetId: 'id'
})

Usuario.hasMany(Transferencia, {
    foreignKey: 'receptor',
    sourceKey: 'id'
})

Transferencia.belongsTo(Usuario, {
    foreignKey: 'receptor',
    targetId: 'id'
})