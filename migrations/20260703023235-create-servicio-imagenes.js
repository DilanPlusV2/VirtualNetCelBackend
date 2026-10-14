'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'servicio_imagenes',
            {

                id: {

                    type: Sequelize.BIGINT,

                    primaryKey: true,

                    autoIncrement: true

                },

                servicio_id: {

                    type: Sequelize.BIGINT,

                    allowNull: false,

                    references: {

                        model: 'servicios',

                        key: 'id'

                    },

                    onUpdate: 'CASCADE',

                    onDelete: 'CASCADE'

                },

                titulo: {

                    type: Sequelize.STRING(150),

                    allowNull: false

                },

                descripcion: {

                    type: Sequelize.TEXT

                },

                ruta_imagen: {

                    type: Sequelize.STRING(255),

                    allowNull: false

                },

                principal: {

                    type: Sequelize.BOOLEAN,

                    defaultValue: false

                },

                created_at: {

                    allowNull: false,

                    type: Sequelize.DATE,

                    defaultValue:
                        Sequelize.literal(
                            'CURRENT_TIMESTAMP'
                        )

                },

                updated_at: {

                    allowNull: false,

                    type: Sequelize.DATE,

                    defaultValue:
                        Sequelize.literal(
                            'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                        )

                }

            }

        );

    },

    async down(queryInterface) {

        await queryInterface.dropTable(
            'servicio_imagenes'
        );

    }

};
