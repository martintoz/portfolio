require('dotenv').config()
import Sequelize from 'sequelize';

const {POSTGRES_USER, POSTGRES_PASS, POSTGRES_DB} = process.env

export const sequelize = new Sequelize(
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASS,
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,
        },
        logging: false
    }
)