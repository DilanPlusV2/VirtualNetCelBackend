module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    'Producto',
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      precio_compra: DataTypes.DECIMAL(15,2),
      precio_venta: DataTypes.DECIMAL(15,2),
      stock: DataTypes.INTEGER,
      ficha_tecnica: DataTypes.STRING,
      manual_usuario: DataTypes.STRING,
      activo: DataTypes.BOOLEAN
    },
    {
      tableName: 'productos',
      underscored: true
    }
  );

  Producto.associate = models => {
    Producto.belongsTo(models.Categoria, {
      foreignKey: 'categoria_id',
      as: 'categoria'
    });

    Producto.hasMany(models.ProductoFoto, {
      foreignKey: 'producto_id',
      as: 'fotos'
    });

    Producto.hasMany(models.MovimientoInventario, {
      foreignKey: 'producto_id',
      as: 'movimientos'
    });

    Producto.hasMany(models.ServicioProducto, {

        foreignKey: 'producto_id',

        as: 'servicios'

    });
  };

  return Producto;
  
};