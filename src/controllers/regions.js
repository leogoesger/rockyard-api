const Region = require("../models").Region;
const Area = require("../models").Area;
const Route = require("../models").Route;

module.exports = {
  create(req, res) {
    return Region.create({
      name: req.body.name,
      open: req.body.open,
      description: req.body.description
    })
      .then(region => res.status(201).send(region))
      .catch(err => res.status(400).send(err));
  },

  list(req, res) {
    return Region.findAll({
      include: [
        {
          model: Area,
          as: "areas",
          include: [{ model: Route, as: "routes" }]
        }
      ]
    })
      .then(regions => res.status(200).send(regions))
      .catch(err => res.status(400).send(err));
  },

  show(req, res) {
    return Region.findById(req.params.regionId, {
      include: [
        {
          model: Area,
          as: "areas",
          include: [{ model: Route, as: "routes" }]
        }
      ]
    })
      .then(region => res.status(200).send(region))
      .catch(err => res.status(400).send(err));
  },

  update(req, res) {
    return Region.findById(req.params.regionId)
      .then(region => {
        if (!region) {
          return res.status(400).send({ message: "Region not found" });
        }
        return region
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(region))
          .catch(err => res.status(400).send({ message: "error updating" }));
      })
      .catch(err => res.status(400).send(err));
  },

  delete(req, res) {
    return Region.findById(req.params.regionId)
      .then(region => {
        if (!region) {
          return res.status(400).send({
            message: "no region"
          });
        }
        return region
          .destroy()
          .then(() => res.status(204).send({ message: "deleted item" }))
          .catch(err => res.status(400).send(err));
      })
      .catch(err => res.status(400).send(err));
  }
};