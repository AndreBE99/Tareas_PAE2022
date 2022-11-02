const express = require('express');
const router = express.Router();
const userModel = require('../users/model');
const controller = require("../users/controller")

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

module.exports = router;