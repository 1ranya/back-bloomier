module.exports = app => {
    const photos = require("../controllers/photo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Photo
    router.post("/", photos.create);
  
    // Retrieve all Photos
    router.get("/", photos.findAll);
  
    // Retrieve all published Photos
    // router.get("/published", Photos.findAllPublished);
  
    router.get("/:id", photos.findOne);
  
    router.put("/:id", photos.update);
  
    // Delete a Photo with id
    // router.delete("/:id", Photos.delete);
  
    // Create a new Photo
    // router.delete("/", Photos.deleteAll);
  
    app.use('/api/photos', router);
  };