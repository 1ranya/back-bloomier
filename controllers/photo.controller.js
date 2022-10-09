const db = require('../models');

const Photo = db.photos; 
const op = db.Sequelize.Op;

// Create and Save a new Photo
exports.create = (req, res) => {
  // Create a Photo
  const photo = {
    url: req.body.url,
    description: req.body.description,
    publisher: req.body.publisher,
    category: req.body.category, 
    likes: req.body.likes
  };

  // Save Tutorial in the database
  Photo.create(photo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Photo."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = async(req, res) => {
  Photo.findAll({})
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving photos."
    });
  });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Photo.update(req.body, {
    where: {id:id}
  })
  .then(res => {
    if(res == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tutorial with id=" + id
    });
  });
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
