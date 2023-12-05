import { Sequelize } from "sequelize";

const db = new Sequelize('123', 'root', '',{
    host: 'localhost',
    dialect: "mysql"
});

export default db; 