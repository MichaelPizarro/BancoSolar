import Sequelize from "sequelize"

export const sequelize = new Sequelize('bancosolar', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})