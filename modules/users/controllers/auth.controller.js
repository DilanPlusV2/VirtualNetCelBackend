const authService = require('../services/auth.service');

class AuthController {

    async register(req, res) {

        try {

            const user =
                await authService.register(req.body);

            return res.status(201).json({
                message: 'Usuario creado',
                user
            });

        } catch (error) {

            if (
                error.message ===
                'EMAIL_ALREADY_EXISTS'
            ) {

                return res.status(409).json({
                    message: 'El email ya existe'
                });

            }

            return res.status(500).json({
                message: error.message
            });

        }

    }

    async login(req, res) {

        try {

            const result =
                await authService.login(
                    req.body.email,
                    req.body.password
                );

            return res.json(result);

        } catch (error) {

            if (
                error.message ===
                'INVALID_CREDENTIALS'
            ) {

                return res.status(401).json({
                    message:
                        'Correo o contraseña incorrectos'
                });

            }

            return res.status(500).json({
                message: error.message
            });

        }

    }

}

module.exports = new AuthController();