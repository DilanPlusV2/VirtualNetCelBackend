'use strict';

module.exports=(sequelize,DataTypes)=>{

    const ServicioProducto=sequelize.define(

        'ServicioProducto',

        {

            cantidad_utilizada:DataTypes.INTEGER,

            precio_unitario:DataTypes.DECIMAL

        },

        {

            tableName:'servicios_productos',

            underscored:true

        }

    );

    ServicioProducto.associate=models=>{

        ServicioProducto.belongsTo(

            models.ServicioRealizado,

            {

                foreignKey:'servicio_realizado_id',

                as:'servicioRealizado'

            }

        );

        ServicioProducto.belongsTo(

            models.Producto,

            {

                foreignKey:'producto_id',

                as:'producto'

            }

        );

    };

    return ServicioProducto;

};