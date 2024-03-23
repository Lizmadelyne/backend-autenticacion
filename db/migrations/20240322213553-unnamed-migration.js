const { ADMIN_TABLE } = require('./../models/user.model');
const { USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable(ADMIN_TABLE, {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        lastName: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
          field: 'last_name',
        },
        phone: {
          allowNull: true,
          type: Sequelize.DataTypes.STRING,
        },
        role: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
          defaultValue: 'admin'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          field: 'created_at',
          defaultValue: Sequelize.NOW,
        },
        userId: {
          field: 'user_id',
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          unique: true,
          references: {
            model: USER_TABLE,
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      });
      
   
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ADMIN_TABLE);
   
  }
};
