require("dotenv").config();
import Sequelize from "sequelize";

const {
  POSTGRES_USER,
  POSTGRES_PASS,
  POSTGRES_DB,
  POSTGRES_HOST,
} = process.env;

export const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: POSTGRES_DB,
        dialect: "postgres",
        host: POSTGRES_HOST,
        port: 5432,
        username: POSTGRES_USER,
        password: POSTGRES_PASS,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${POSTGRES_USER}:${POSTGRES_PASS}@${POSTGRES_HOST}/${POSTGRES_DB}`,
        { logging: false, native: false }
      );
