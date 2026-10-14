const ServiceService =
require('../services/service.service');

const ServiceDTO =
require('../dto/service.dto');

class ServiceController {

    async create(req, res) {

        try {

            const data =
                ServiceDTO.create(req.body);

            const service =
                await ServiceService.create(data);

            return res.status(201).json({

                message:
                    'Servicio creado',

                service

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

            const services =
                await ServiceService.getAll();

            return res.json(services);

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

            const service =
                await ServiceService.getById(
                    req.params.id
                );

            if (!service) {

                return res.status(404).json({

                    message:
                        'Servicio no encontrado'

                });

            }

            return res.json(service);

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
                ServiceDTO.update(req.body);

            const service =
                await ServiceService.update(

                    req.params.id,

                    data

                );

            return res.json({

                message:
                    'Servicio actualizado',

                service

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

            await ServiceService.remove(

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
    new ServiceController();