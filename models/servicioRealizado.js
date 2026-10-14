'use strict';

module.exports=(sequelize,DataTypes)=>{

    const ServicioRealizado=sequelize.define(

        'ServicioRealizado',

        {

            cliente:DataTypes.STRING,

            empresa:DataTypes.STRING,

            telefono:DataTypes.STRING,

            direccion:DataTypes.STRING,

            ciudad:DataTypes.STRING,

            tecnico:DataTypes.STRING,

            fecha:DataTypes.DATE,

            observaciones:DataTypes.TEXT,

            testimonio:DataTypes.TEXT,

            valor_cobrado:DataTypes.DECIMAL,

            descontar_inventario:DataTypes.BOOLEAN,

            estado:DataTypes.STRING

        },

        {

            tableName:'servicios_realizados',

            underscored:true

        }

    );

    ServicioRealizado.associate=models=>{

        ServicioRealizado.belongsTo(

            models.Servicio,

            {

                foreignKey:'servicio_id',

                as:'servicio'

            }

        );

        ServicioRealizado.hasMany(

            models.ServicioProducto,

            {

                foreignKey:'servicio_realizado_id',

                as:'productos'

            }

        );

    };

    return ServicioRealizado;

};