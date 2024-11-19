import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Estudiante = sequelize.define('estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCarrera: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Estudiante;