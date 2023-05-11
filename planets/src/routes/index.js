const { Router } = require("express");
const controllers= require('../controllers')
const router = Router();

router.get("/", controllers.getPlanets);


router.post("/", controllers.createPlanets);


module.exports = router;
