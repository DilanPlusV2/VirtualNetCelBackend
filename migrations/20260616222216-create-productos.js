'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },

      nombre: {
        type: Sequelize.STRING(150),
        allowNull: false
      },

      descripcion: {
        type: Sequelize.TEXT
      },

      precio_compra: {
        type: Sequelize.DECIMAL(15,2),
        allowNull: false
      },

      precio_venta: {
        type: Sequelize.DECIMAL(15,2),
        allowNull: false
      },

      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      ficha_tecnica: {
        type: Sequelize.STRING(255)
      },

      manual_usuario: {
        type: Sequelize.STRING(255)
      },

      activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },

      categoria_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'categorias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('productos');
  }
};
