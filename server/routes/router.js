const express = require("express");
const router = express.Router();

const services = require("../services/render")
const controller = require("../controllers/controller");
console.log(services);

router.get("/home", services.homeRoutes);
router.get("/add-user", services.add_user);
router.get("/update-user", services.update_user);
// router.get("/delete-user", services.delete_user);


router.post("/api/user",controller.create);
router.get("/api/users",controller.find);
router.put("/api/user/:id",controller.update);
router.delete("/api/user/:id",controller.delete);

module.exports = router;

console.log(router);