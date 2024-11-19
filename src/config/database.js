import Sequelize from "sequelize";

const hostname = 'prograweb-20242-bd.postgres.database.azure.com';
const username = 'postgres';
const password = 'Administrador!';
const database = 'matricula'
const port = 5432;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    operatorAliases: false
})

export default sequelize;