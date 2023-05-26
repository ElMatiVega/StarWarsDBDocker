const { Router } = require("express");
const controllers= require('../controllers');
const middlewares= require('../middlerwares');
const router = Router();

router.get("/", controllers.getPlanets);

router.get("/:id", controllers.getPlanetById);

router.post("/",middlewares.planetsValidation , controllers.createPlanets);


module.exports = router;
