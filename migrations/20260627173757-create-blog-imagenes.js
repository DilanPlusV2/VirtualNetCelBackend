'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('blog_imagenes', {

            id: {

                type: Sequelize.BIGINT,

                autoIncrement: true,

                primaryKey: true

            },

            blog_id: {

                type: Sequelize.BIGINT,

                allowNull: false,

                references: {

                    model: 'blog',

                    key: 'id'

                },

                onUpdate: 'CASCADE',

                onDelete: 'CASCADE'

            },

            ruta_archivo: {

                type: Sequelize.STRING(255),

                allowNull: false

            },

            titulo_imagen: {

                type: Sequelize.STRING(255)

            },

            descripcion: {

                type: Sequelize.TEXT

            },

            orden: {

                type: Sequelize.INTEGER,

                defaultValue: 1

            },

            created_at: {

                type: Sequelize.DATE,

                allowNull: false,

                defaultValue:
                    Sequelize.literal('CURRENT_TIMESTAMP')

            },

            updated_at: {

                type: Sequelize.DATE,

                allowNull: false,

                defaultValue:
                    Sequelize.literal(
                        'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                    )

            }

        });

    },

    async down(queryInterface) {

        await queryInterface.dropTable('blog_imagenes');

    }

};