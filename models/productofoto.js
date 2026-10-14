module.exports = (sequelize, DataTypes) => {
  const ProductoFoto = sequelize.define(
    'ProductoFoto',
    {
      ruta_archivo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      principal: DataTypes.BOOLEAN
    },
    {
      tableName: 'producto_fotos',
      underscored: true
    }
  );

  ProductoFoto.associate = models => {
    ProductoFoto.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'producto'
    });
  };

  return ProductoFoto;
};