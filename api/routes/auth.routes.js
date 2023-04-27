const { Router } = require('express');

const authController = require('../controllers/auth.controller');

const authRoutes = Router();

authRoutes.post('/', authController.singIn);

module.exports = authRoutes;