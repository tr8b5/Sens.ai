const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/books"
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.delete);

module.exports = router;
