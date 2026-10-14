'use strict';

module.exports = (sequelize, DataTypes) => {

    const Servicio = sequelize.define(

        'Servicio',

        {

            nombre:DataTypes.STRING,

            descripcion:DataTypes.TEXT,

            tipo:DataTypes.ENUM(

                'INSTALACION',

                'MANTENIMIENTO',

                'REPARACION',

                'VISITA_TECNICA',

                'VENTA'

            ),

            precio_base:DataTypes.DECIMAL,

            activo:DataTypes.BOOLEAN

        },

        {

            tableName:'servicios',

            underscored:true

        }

    );

    Servicio.associate=models=>{

        Servicio.hasMany(

            models.ServicioRealizado,

            {

                foreignKey:'servicio_id',

                as:'serviciosRealizados'

            }

        );

        Servicio.hasMany(

    models.ServicioImagen,

    {

        foreignKey:
            'servicio_id',

        as:
            'imagenes'

    }

);

    };

    return Servicio;

};