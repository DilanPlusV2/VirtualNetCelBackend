'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('blog_referencias', {

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

            titulo: {

                type: Sequelize.STRING(255),

                allowNull: false

            },

            autores: {

                type: Sequelize.STRING(255)

            },

            url: {

                type: Sequelize.STRING(500)

            },

            anio: {

                type: Sequelize.INTEGER

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

        await queryInterface.dropTable(
            'blog_referencias'
        );

    }

};