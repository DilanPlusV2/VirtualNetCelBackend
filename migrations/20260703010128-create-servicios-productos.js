'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports={

    async up(queryInterface,Sequelize){

        await queryInterface.createTable(

            'servicios_productos',

            {

                id:{

                    type:Sequelize.BIGINT,

                    autoIncrement:true,

                    primaryKey:true

                },

                servicio_realizado_id:{

                    type:Sequelize.BIGINT,

                    allowNull:false,

                    references:{

                        model:'servicios_realizados',

                        key:'id'

                    }

                },

                producto_id:{

                    type:Sequelize.BIGINT,

                    allowNull:false,

                    references:{

                        model:'productos',

                        key:'id'

                    }

                },

                cantidad_utilizada:{

                    type:Sequelize.INTEGER,

                    defaultValue:1

                },

                precio_unitario:{

                    type:Sequelize.DECIMAL(10,2),

                    defaultValue:0

                },

                created_at:{

                    type:Sequelize.DATE,

                    allowNull:false,

                    defaultValue:
                        Sequelize.literal(
                            'CURRENT_TIMESTAMP'
                        )

                },

                updated_at:{

                    type:Sequelize.DATE,

                    allowNull:false,

                    defaultValue:
                        Sequelize.literal(
                            'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                        )

                }

            }

        );

    },

    async down(queryInterface){

        await queryInterface.dropTable(

            'servicios_productos'

        );

    }

};
