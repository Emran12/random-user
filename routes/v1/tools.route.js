const express = require("express");
const router = express.Router();
const toolsController = require("../../controllers/tools.controller.js");
const viewCount = require("../../middlewares/viewCount.js");
const limiter = require("../../middlewares/limiter.js");
// router.get("/", (req, res) => {
//   res.send("tools route found.");
// });

// router.post("/", (req, res) => {
//   res.send("Tools are saved");
// });

router
  .route("/")
  .get(toolsController.getAllTools)
  .post(toolsController.saveATool);

router
  .route("/:id")
  .get(viewCount, limiter, toolsController.getToolDetail)
  .patch(toolsController.updateTool)
  .delete(toolsController.deleteTool);

module.exports = router;
