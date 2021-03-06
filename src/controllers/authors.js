const Author = require('../models').Author;
const Book = require('../models').Book;

module.exports = {
  create(req, res) {
    return Author.create(req.body)
      .then(author => res.status(201).send(author))
      .catch(err => res.status(400).send(err));
  },

  list(req, res) {
    return Author.findAll({
      include: [{model: Book, foreignKey: 'bookId', as: 'books'}],
    })
      .then(authors => res.status(200).send(authors))
      .catch(err => res.status(400).send(err));
  },

  show(req, res) {
    return Author.findById(req.params.authorId, {
      include: [{model: Book, foreignKey: 'bookId', as: 'books'}],
    })
      .then(author => res.status(200).send(author))
      .catch(err => res.status(400).send(err));
  },

  update(req, res) {
    return Author.findById(req.params.authorId)
      .then(author => {
        if (!author) {
          return res.status(404).send({message: 'Author not found'});
        }
        return author
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(author))
          .catch(err => res.status(400).send(err));
      })
      .catch(err => res.status(400).send(err));
  },

  delete(req, res) {
    return Author.findById(req.params.authorId)
      .then(author => {
        if (!author) {
          return res.status(404).send({
            message: 'no author',
          });
        }
        return author
          .destroy()
          .then(() => res.status(204).send({message: 'deleted item'}))
          .catch(err => res.status(400).send(err));
      })
      .catch(err => res.status(400).send(err));
  },
};
