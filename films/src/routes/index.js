const { Router } = require("express");
const controllers= require('../controllers');
const middlewares= require('../middlerwares');
const router = Router();

router.get("/", controllers.getFilms);

router.get("/:id", controllers.getFilmById);

router.post("/", middlewares.filmsValidation, controllers.createFilms);


module.exports = router;
