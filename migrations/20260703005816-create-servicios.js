'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('servicios', {

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

            tipo: {

                type: Sequelize.ENUM(

                    'INSTALACION',

                    'MANTENIMIENTO',

                    'REPARACION',

                    'VISITA_TECNICA',

                    'VENTA'

                ),

                allowNull: false

            },

            precio_base: {

                type: Sequelize.DECIMAL(10,2),

                defaultValue:0

            },

            activo:{

                type: Sequelize.BOOLEAN,

                defaultValue:true

            },

            created_at:{

                type:Sequelize.DATE,

                allowNull:false,

                defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')

            },

            updated_at:{

                type:Sequelize.DATE,

                allowNull:false,

                defaultValue:
                    Sequelize.literal(
                        'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                    )

            }

        });

    },

    async down(queryInterface){

        await queryInterface.dropTable('servicios');

    }

};
