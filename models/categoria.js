module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    'Categoria',
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.TEXT
    },
    {
      tableName: 'categorias',
      underscored: true
    }
  );

  Categoria.associate = models => {
    Categoria.hasMany(models.Producto, {
      foreignKey: 'categoria_id',
      as: 'productos'
    });
  };

  return Categoria;
};