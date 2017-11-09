const Area = require("../models").Area;
const Route = require("../models").Route;

module.exports = {
  create(req, res) {
    return Area.create({
      name: req.body.name,
      open: req.body.open,
      description: req.body.description,
      gps: req.body.gps,
      regionId: req.body.regionId
    })
      .then(area => res.status(201).send(area))
      .catch(err => res.status(400).send(err));
  },

  list(req, res) {
    return Area.findAll({
      include: [
        {
          model: Route,
          as: "routes"
        }
      ]
    })
      .then(areas => res.status(200).send(areas))
      .catch(err => res.status(400).send(err));
  },

  show(req, res) {
    return Area.findById(req.params.areaId, {
      include: [
        {
          model: Route,
          as: "routes"
        }
      ]
    })
      .then(area => res.status(200).send(area))
      .catch(err => res.status(400).send(err));
  },

  update(req, res) {
    return Area.findById(req.params.areaId, {
      include: [{ model: Route, as: "routes" }]
    })
      .then(area => {
        if (!area) {
          return res.status(400).send({ message: "Area not found" });
        }
        return area
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(area))
          .catch(err => res.status(400).send({ message: "error updating" }));
      })
      .catch(err => res.status(400).send(err));
  },

  delete(req, res) {
    return Area.findById(req.params.areaId)
      .then(area => {
        if (!area) {
          return res.status(400).send({
            message: "no area"
          });
        }
        return area
          .destroy()
          .then(() => res.status(204).send({ message: "deleted item" }))
          .catch(err => res.status(400).send(err));
      })
      .catch(err => res.status(400).send(err));
  }
};