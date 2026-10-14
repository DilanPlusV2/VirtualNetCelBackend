module.exports = (sequelize, DataTypes) => {

    const BlogImagen = sequelize.define(

        'BlogImagen',

        {

            ruta_archivo: DataTypes.STRING,

            titulo_imagen: DataTypes.STRING,

            descripcion: DataTypes.TEXT,

            orden: DataTypes.INTEGER

        },

        {

            tableName: 'blog_imagenes',

            underscored: true

        }

    );

    BlogImagen.associate = models => {

        BlogImagen.belongsTo(models.Blog, {

            foreignKey: 'blog_id',

            as: 'blog'

        });

    };

    return BlogImagen;

};