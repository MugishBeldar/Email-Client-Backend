const functions = require("./controllers");
const express = require("express");
const router = express.Router();

// ALL API
router.get("/:id", functions.displayUserControllerAction);
router.post("/", functions.createUserControllerAction);
router.put("/:id", functions.updateUserControllerAction);
router.delete("/:id", functions.deleteUserControllerAction);
router.get("/", functions.paginateUsersControllerAction);


router.post("/lable/:id", functions.createLableControllerAction);
router.delete("/lable/:id", functions.deleteLableControllerAction);
router.put("/lable/:id", functions.updateLableControllerAction);
router.get("/lable/:id", functions.getLableControllerAction);

router.post("/send", functions.sendMailControllerAction);

module.exports = { router }