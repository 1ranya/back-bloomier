module.exports = app => {
    const photos = require("../controllers/photo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", photos.create);
  
    // Retrieve all Tutorials
    router.get("/", photos.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // Update a photo with id
    router.put("/:id", photos.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/photos', router);
  };