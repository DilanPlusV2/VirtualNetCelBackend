'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('blog', {

            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },

            titulo: {
                type: Sequelize.STRING(180),
                allowNull: false
            },

            slug: {
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: true
            },

            resumen: {
                type: Sequelize.TEXT,
                allowNull: false
            },

            contenido: {
                type: Sequelize.TEXT('long'),
                allowNull: false
            },

            autor: {
                type: Sequelize.STRING(120),
                allowNull: false
            },

            imagen_portada: {
                type: Sequelize.STRING(255)
            },

            likes: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },

            publicado: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },

            fecha_publicacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue:
                    Sequelize.literal('CURRENT_TIMESTAMP')
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

        await queryInterface.dropTable('blog');

    }

};