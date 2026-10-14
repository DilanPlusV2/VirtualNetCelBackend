const ServiceImageService =
require('../services/service-image.service');

const ServiceImageDTO =
require('../dto/service-image.dto');

class ServiceImageController {

    async create(req, res) {

        try {

            const data =
                ServiceImageDTO.create(
                    req.body
                );

            const image =
                await ServiceImageService.create(

                    data,

                    req.file

                );

            res.status(201).json({

                message:
                    'Imagen agregada',

                image

            });

        }

        catch(error){

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async getByService(req,res){

        try{

            const images =
                await ServiceImageService
                    .getByService(

                        req.params.serviceId

                    );

            res.json(images);

        }

        catch(error){

            res.status(500).json({

                message:
                    error.message

            });

        }

    }

    async update(req,res){

        try{

            const image =
                await ServiceImageService
                    .update(

                        req.params.id,

                        ServiceImageDTO.update(
                            req.body
                        )

                    );

            res.json({

                message:
                    'Imagen actualizada',

                image

            });

        }

        catch(error){

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async uploadImage(req,res){

        try{

            const image =
                await ServiceImageService
                    .uploadImage(

                        req.params.id,

                        req.file

                    );

            res.json({

                message:
                    'Imagen reemplazada',

                image

            });

        }

        catch(error){

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async delete(req,res){

        try{

            await ServiceImageService
                .delete(req.params.id);

            res.json({

                message:
                    'Imagen eliminada'

            });

        }

        catch(error){

            res.status(400).json({

                message:
                    error.message

            });

        }

    }

}

module.exports =
    new ServiceImageController();