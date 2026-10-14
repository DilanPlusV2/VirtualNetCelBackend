const ServiceProductService =
require('../services/service-product.service');

const ServiceProductDTO =
require('../dto/service-product.dto');

class ServiceProductController {

    async create(req, res) {

        try {

            const data =
                ServiceProductDTO.create(
                    req.body
                );

            const relation =
                await ServiceProductService.create(
                    data
                );

            res.status(201).json({

                message:
                    'Producto asociado al servicio',

                relation

            });

        }

        catch (error) {

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async getByCompletedService(req, res) {

        try {

            const relations =
                await ServiceProductService
                    .getByCompletedService(
                        req.params.completedServiceId
                    );

            res.json(relations);

        }

        catch (error) {

            res.status(500).json({

                message:
                    error.message

            });

        }

    }

    async update(req, res) {

        try {

            const relation =
                await ServiceProductService
                    .update(

                        req.params.id,

                        req.body

                    );

            res.json({

                message:
                    'Cantidad actualizada',

                relation

            });

        }

        catch (error) {

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async delete(req, res) {

        try {

            await ServiceProductService.delete(
                req.params.id
            );

            res.json({

                message:
                    'Producto eliminado del servicio'

            });

        }

        catch (error) {

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

}

module.exports =
    new ServiceProductController();