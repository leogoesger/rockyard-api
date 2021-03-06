'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Region = sequelizeClient.define('Region', {
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
  Region.associate = models => {
    Region.hasMany(models.Subregion, {
      foreignKey: 'regionId',
      as: 'subregions',
    });
  };
  return Region;
};
