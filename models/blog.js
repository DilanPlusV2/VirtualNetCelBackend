'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const Blog = sequelize.define(

        'Blog',

        {

            titulo: DataTypes.STRING,

            slug: DataTypes.STRING,

            resumen: DataTypes.TEXT,

            contenido: DataTypes.TEXT('long'),

            autor: DataTypes.STRING,

            imagen_portada: DataTypes.STRING,

            likes: {

                type: DataTypes.INTEGER,

                defaultValue: 0

            },

            publicado: {

                type: DataTypes.BOOLEAN,

                defaultValue: true

            },

            fecha_publicacion: DataTypes.DATE

        },

        {

            tableName: 'blog',

            underscored: true

        }

    );

    Blog.associate = models => {

        Blog.hasMany(models.BlogImagen, {

            foreignKey: 'blog_id',

            as: 'imagenes'

        });

        Blog.hasMany(models.BlogReferencia, {

            foreignKey: 'blog_id',

            as: 'referencias'

        });

    };

    return Blog;

};