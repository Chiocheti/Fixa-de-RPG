const bcrypt = require('bcrypt');

const { User } = require('../models');

const authController = {
    async singIn(req, res) {
        try {
            const { username, password } = req.body;

            const data = await User.findOne({
                where: { username },
            });

            if (!data) {
                return res.status(401).json({ error: 'Usuário ou senha incorretos!!!' });
            }

            const passwordMatch = bcrypt.compareSync(password, data.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Usuário ou senha incorretos!!!' });
            }

            return res.status(201).json({ 
                user: {
                    username: data.username,
                    mail: data.mail,
                    phone: data.phone
                }
             });

        } catch (error) {
            console.log('Houve um erro: ' + error);
            return res.status(500).json({ message: 'Server error: ', error });
        }
    }
}

module.exports = authController;