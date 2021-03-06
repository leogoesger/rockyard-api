'use strict';

module.exports = (sequelize, DataTypes) => {
  const Subarea = sequelize.define('Subarea', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    open: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gps: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  Subarea.associate = models => {
    Subarea.belongsTo(models.Area, {
      foreignKey: 'areaId',
      as: 'area',
    });
    Subarea.hasMany(models.Climb, {
      foreignKey: 'subareaId',
      as: 'climbs',
    });
  };
  return Subarea;
};
