'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movimientos_inventario', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },

      producto_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      tipo: {
        type: Sequelize.ENUM(
          'ENTRADA',
          'SALIDA',
          'AJUSTE_POSITIVO',
          'AJUSTE_NEGATIVO'
        ),
        allowNull: false
      },

      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      stock_anterior: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      stock_nuevo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      observacion: {
        type: Sequelize.TEXT
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movimientos_inventario');

    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS enum_movimientos_inventario_tipo;'
    );
  }
};
