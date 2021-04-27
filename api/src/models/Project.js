import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.DATE
    },
}, {
    timestamps: false
})

// Project.hasMany(Task, {foreignKey: 'projectId', sourceKey: 'id'})
// Task.belongsTo(Project, {foreignKey:'projectId', sourceKey: 'id' })

export default Project;