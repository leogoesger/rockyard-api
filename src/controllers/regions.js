const Op = require('sequelize').Op;
const Region = require('../models').Region;
const Subregion = require('../models').Subregion;

module.exports = {
  create(req, res) {
    return Region.create(req.body)
      .then(region => res.status(201).send(region))
      .catch(err => res.status(400).send(err));
  },

  list(req, res) {
    return Region.findAll({
      include: [{model: Subregion, as: 'subregions'}],
    })
      .then(regions => res.status(200).send(regions))
      .catch(err => res.status(400).send(err));
  },

  show(req, res) {
    return Region.findById(req.params.regionId, {
      include: [{model: Subregion, as: 'subregions'}],
    })
      .then(region => res.status(200).send(region))
      .catch(err => res.status(400).send(err));
  },

  update(req, res) {
    return Region.findById(req.params.regionId)
      .then(region => {
        if (!region) {
          return res.status(404).send({message: 'Region not found'});
        }
        return region
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(region))
          .catch(err => res.status(400).send({err}));
      })
      .catch(err => res.status(400).send(err));
  },

  delete(req, res) {
    return Region.findById(req.params.regionId)
      .then(region => {
        if (!region) {
          return res.status(404).send({
            message: 'no region',
          });
        }
        return region
          .destroy()
          .then(() => res.status(204).send(region))
          .catch(err => res.status(400).send(err));
      })
      .catch(err => res.status(400).send(err));
  },

  search(req, res) {
    return Region.findAll({
      where: {
        name: {
          [Op.iLike]: `%${req.body.name}%`,
        },
      },
      attributes: {
        exclude: ['id', 'open', 'gps', 'createdAt', 'updatedAt'],
      },
    }).then(regions => {
      return res.status(200).send(regions);
    });
  },
};
