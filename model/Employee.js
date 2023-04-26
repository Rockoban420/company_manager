const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config');

// create a class that inherits all of the prototype methods of the "Model" class
// from Sequelize

class Employee extends Model {}

Employee.init(
    // defines columns on model
    {
        // by default sequelize creates and ID column for us that auto-increments
        // and sets it as the primary key
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }   
    },
    // link to database connection and config settings 
    // for how to create this table
    {
        sequelize,
        timestamps: false,
        modelName: 'employee' // we override what the name of the table should be otherwise it will be Users (with the s)
    }
);

module.exports = Employee;