const { Router } = require('express');

const userController = require('../controllers/user.controller');

const userRoutes = Router();

userRoutes.post('/', userController.store);

module.exports = userRoutes;
