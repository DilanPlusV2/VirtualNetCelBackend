'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports={

    async up(queryInterface,Sequelize){

        await queryInterface.createTable(

            'servicios_realizados',

            {

                id:{

                    type:Sequelize.BIGINT,

                    autoIncrement:true,

                    primaryKey:true

                },

                servicio_id:{

                    type:Sequelize.BIGINT,

                    allowNull:false,

                    references:{

                        model:'servicios',

                        key:'id'

                    }

                },

                cliente:{

                    type:Sequelize.STRING(150),

                    allowNull:false

                },

                empresa:{

                    type:Sequelize.STRING(150)

                },

                telefono:{

                    type:Sequelize.STRING(40)

                },

                direccion:{

                    type:Sequelize.STRING(255)

                },

                ciudad:{

                    type:Sequelize.STRING(120)

                },

                tecnico:{

                    type:Sequelize.STRING(120)

                },

                fecha:{

                    type:Sequelize.DATE,

                    defaultValue:
                        Sequelize.literal(
                            'CURRENT_TIMESTAMP'
                        )

                },

                observaciones:{

                    type:Sequelize.TEXT

                },

                testimonio:{

                    type:Sequelize.TEXT

                },

                valor_cobrado:{

                    type:Sequelize.DECIMAL(10,2),

                    defaultValue:0

                },

                descontar_inventario:{

                    type:Sequelize.BOOLEAN,

                    defaultValue:true

                },

                estado:{

                    type:Sequelize.STRING(50),

                    defaultValue:'FINALIZADO'

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

            'servicios_realizados'

        );

    }

};
