const { Router } = require("express");
const controllers= require('../controllers');
const middlewares= require('../middlerwares');

const router = Router();

router.get("/", controllers.getCharacters);

router.post('/',middlewares.charactersValidation, controllers.createCharacters)


module.exports = router;
