const CompletedServiceService =
require('../services/completed-service.service');

const CompletedServiceDTO =
require('../dto/completed-service.dto');

class CompletedServiceController {

    async create(req, res) {

        try {

            const data =
                CompletedServiceDTO.create(
                    req.body
                );

            const completed =
                await CompletedServiceService.create(
                    data
                );

            return res.status(201).json({

                message:
                    'Servicio registrado',

                completed

            });

        }

        catch (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async getAll(req, res) {

        try {

            const completed =
                await CompletedServiceService.getAll();

            return res.json(completed);

        }

        catch (error) {

            return res.status(500).json({

                message:
                    error.message

            });

        }

    }

    async getById(req, res) {

        try {

            const completed =
                await CompletedServiceService.getById(
                    req.params.id
                );

            if (!completed) {

                return res.status(404).json({

                    message:
                        'Servicio no encontrado'

                });

            }

            return res.json(completed);

        }

        catch (error) {

            return res.status(500).json({

                message:
                    error.message

            });

        }

    }

    async update(req, res) {

        try {

            const data =
                CompletedServiceDTO.update(
                    req.body
                );

            const completed =
                await CompletedServiceService.update(

                    req.params.id,

                    data

                );

            return res.json({

                message:
                    'Servicio actualizado',

                completed

            });

        }

        catch (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async remove(req, res) {

        try {

            await CompletedServiceService.remove(
                req.params.id
            );

            return res.json({

                message:
                    'Servicio eliminado'

            });

        }

        catch (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }

    }

}

module.exports =
    new CompletedServiceController();