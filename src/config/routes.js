const express = require('express');
const router = express.Router();

const HomeController = require("../controllers/home_controller")
const UsuariosController = require("../controllers/usuarios_controller")

router.get('/', HomeController.index);
router.get('/sobre', HomeController.sobre);

router.get('/usuarios', UsuariosController.index);


module.exports = router;