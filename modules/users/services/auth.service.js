const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Usuario } = require('../../../models');

const UserDTO = require('../dto/user.dto');

class AuthService {

    async register(data) {

        const existingUser = await Usuario.findOne({
            where: {
                email: data.email
            }
        });

        if (existingUser) {
            throw new Error('EMAIL_ALREADY_EXISTS');
        }

        const hashedPassword = await bcrypt.hash(
            data.password,
            12
        );

        const userData = UserDTO.create(
            data,
            hashedPassword
        );

        const user = await Usuario.create(
            userData
        );

        return user;
    }

    async login(email, password) {

        const user = await Usuario.findOne({
            where: {
                email
            }
        });

        if (!user) {
            throw new Error('INVALID_CREDENTIALS');
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            throw new Error('INVALID_CREDENTIALS');
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_KEY,
            {
                expiresIn: '8h'
            }
        );

        user.ultimo_login = new Date();

        await user.save();

        return {
            token,
            user
        };
    }
}

module.exports = new AuthService();