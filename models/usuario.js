module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      nombre: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      activo: DataTypes.BOOLEAN,
      ultimo_login: DataTypes.DATE
    },
    {
      tableName: 'usuarios',
      underscored: true
    }
  );

  return Usuario;
};