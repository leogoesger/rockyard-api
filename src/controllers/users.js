const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models').User;
const Climb = require('../models').Climb;
const Book = require('../models').Book;

module.exports = {
  signUp(req, res) {
    if (!req.body.email || !req.body.password) {
      res.status(400).send('email not found');
      return;
    }

    User.create(
      Object.assign(req.body, {
        password: bcrypt.hashSync(req.body.password, 10),
      })
    )
      .then(user => {
        const gutsyJwt = jwt.sign(
          {firstName: user.firstName, email: req.body.email},
          process.env.CRYPTO_KEY
        );
        User.find({
          where: {
            email: req.body.email,
          },
          include: [
            {model: Climb, foreignKey: 'userId', as: 'climbs'},
            {model: Book, foreignKey: 'userId', as: 'books'},
          ],
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password', 'role'],
          },
        }).then(fetchUser => {
          res.status(200).send({gutsyJwt, fetchUser});
        });
      })
      .catch(err => res.status(400).send(err));
  },

  login(req, res) {
    if (!req.body.email || !req.body.password) {
      res.status(400).send('email not found');
      return;
    }
    User.find({
      where: {
        email: req.body.email,
      },
      include: [
        {model: Climb, foreignKey: 'userId', as: 'climbs'},
        {model: Book, foreignKey: 'userId', as: 'books'},
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'role'],
      },
    })
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const gutsyJwt = jwt.sign(
            {firstName: user.firstName, email: req.body.email},
            process.env.CRYPTO_KEY
          );
          res.status(200).send({gutsyJwt, user});
        } else {
          res.status(404).send({message: 'Wrong Password!'});
        }
      })
      .catch(() =>
        res.status(400).send({message: 'Could not find your email!'})
      );
  },

  getMe(req, res) {
    User.findById(req.user.id, {
      include: [
        {model: Climb, foreignKey: 'userId', as: 'climbs'},
        {model: Book, foreignKey: 'userId', as: 'books'},
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password', 'role'],
      },
    })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(404).send(err));
  },
};
