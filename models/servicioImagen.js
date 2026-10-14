'use strict';

module.exports = (sequelize, DataTypes) => {

    const ServicioImagen =
        sequelize.define(

            'ServicioImagen',

            {

                titulo: DataTypes.STRING,

                descripcion: DataTypes.TEXT,

                ruta_imagen: DataTypes.STRING,

                principal: DataTypes.BOOLEAN

            },

            {

                tableName:
                    'servicio_imagenes',

                underscored: true

            }

        );

    ServicioImagen.associate =
        models => {

            ServicioImagen.belongsTo(

                models.Servicio,

                {

                    foreignKey:
                        'servicio_id',

                    as:
                        'servicio'

                }

            );

        };

    return ServicioImagen;

};