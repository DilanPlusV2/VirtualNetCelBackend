module.exports = (sequelize, DataTypes) => {
  const MovimientoInventario = sequelize.define(
    'MovimientoInventario',
    {
      tipo: DataTypes.ENUM(
        'ENTRADA',
        'SALIDA',
        'AJUSTE_POSITIVO',
        'AJUSTE_NEGATIVO'
      ),
      cantidad: DataTypes.INTEGER,
      stock_anterior: DataTypes.INTEGER,
      stock_nuevo: DataTypes.INTEGER,
      observacion: DataTypes.TEXT
    },
    {
      tableName: 'movimientos_inventario',
      underscored: true
    }
  );

  MovimientoInventario.associate = models => {
    MovimientoInventario.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'producto'
    });
  };

  return MovimientoInventario;
};