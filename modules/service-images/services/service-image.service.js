const {

    Servicio,
    ServicioImagen

} = require('../../../models');

class ServiceImageService {

    async create(data, file) {

        const servicio =
            await Servicio.findByPk(
                data.servicio_id
            );

        if (!servicio) {

            throw new Error(
                'Servicio no encontrado'
            );

        }

        if (data.principal) {

            await ServicioImagen.update(

                {
                    principal: false
                },

                {
                    where: {
                        servicio_id:
                            data.servicio_id
                    }
                }

            );

        }

        return await ServicioImagen.create({

            servicio_id:
                data.servicio_id,

            titulo:
                data.titulo,

            descripcion:
                data.descripcion,

            principal:
                data.principal,

            ruta_imagen:
                `/uploads/services/images/${file.filename}`

        });

    }

    async getByService(serviceId) {

        return await ServicioImagen.findAll({

            where: {

                servicio_id:
                    serviceId

            },

            order: [

                ['principal', 'DESC'],

                ['id', 'ASC']

            ]

        });

    }

    async update(id, data) {

        const image =
            await ServicioImagen.findByPk(id);

        if (!image) {

            throw new Error(
                'Imagen no encontrada'
            );

        }

        if (data.principal) {

            await ServicioImagen.update(

                {

                    principal: false

                },

                {

                    where: {

                        servicio_id:
                            image.servicio_id

                    }

                }

            );

        }

        await image.update({

            titulo:
                data.titulo,

            descripcion:
                data.descripcion,

            principal:
                data.principal

        });

        return image;

    }

    async uploadImage(id, file) {

        const image =
            await ServicioImagen.findByPk(id);

        if (!image) {

            throw new Error(
                'Imagen no encontrada'
            );

        }

        await image.update({

            ruta_imagen:
                `/uploads/services/images/${file.filename}`

        });

        return image;

    }

    async delete(id) {

        const image =
            await ServicioImagen.findByPk(id);

        if (!image) {

            throw new Error(
                'Imagen no encontrada'
            );

        }

        await image.destroy();

        return true;

    }

}

module.exports =
    new ServiceImageService();