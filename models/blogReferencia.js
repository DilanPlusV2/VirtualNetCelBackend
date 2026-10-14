module.exports = (sequelize, DataTypes) => {

    const BlogReferencia = sequelize.define(

        'BlogReferencia',

        {

            titulo: DataTypes.STRING,

            autores: DataTypes.STRING,

            url: DataTypes.STRING,

            anio: DataTypes.INTEGER,

            orden: DataTypes.INTEGER

        },

        {

            tableName: 'blog_referencias',

            underscored: true

        }

    );

    BlogReferencia.associate = models => {

        BlogReferencia.belongsTo(models.Blog, {

            foreignKey: 'blog_id',

            as: 'blog'

        });

    };

    return BlogReferencia;

};