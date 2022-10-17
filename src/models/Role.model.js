import { sequelize } from "../config/connection.js"
import { INTEGER, STRING } from "sequelize";

export const RoleModel = sequelize.define("role", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: STRING(50),
        unique: true,
        allowNull: false,
    },
}, {
    tableName: 'role',
    timestamps: false
});
