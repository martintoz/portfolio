import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    github: {
        type: Sequelize.STRING,
    },
    deploy: {
        type: Sequelize.STRING,
    },
    photo: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false
})

// Project.hasMany(Task, {foreignKey: 'projectId', sourceKey: 'id'})
// Task.belongsTo(Project, {foreignKey:'projectId', sourceKey: 'id' })

export default Project;