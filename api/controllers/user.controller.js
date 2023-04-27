const bcrypt = require('bcrypt');

const { User } = require('../models');


const userController = {

    async index(req, res) {
        try {
            const data = await User.findAll();

            return res.status(201).json(data)
        } catch (error) {
            console.log('Houve um erro: ' + error);
            return res.status(500).json({ message: 'Server error: ', error });
        }
    },

    async store(req, res) {
        try {
            const user = req.body;

            const data = await User.create({ ...user, password: bcrypt.hashSync(user.password, 10) });

            return res.status(201).json(data);
        } catch (error) {
            console.log('Houve um erro: ' + error);
            return res.status(500).json({ message: 'Server error: ', error });
        }
    },
};

module.exports = userController;