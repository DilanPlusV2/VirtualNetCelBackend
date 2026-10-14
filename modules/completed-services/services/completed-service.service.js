const {

    Servicio,
    ServicioRealizado

} = require('../../../models');

class CompletedServiceService {

    async create(data) {

        const servicio =
            await Servicio.findByPk(
                data.servicio_id
            );

        if (!servicio) {

            throw new Error(
                'El servicio no existe'
            );

        }

        return await ServicioRealizado.create(data);

    }

    async getAll() {

        return await ServicioRealizado.findAll({

            include: [

                {

                    model: Servicio,

                    as: 'servicio'

                }

            ],

            order: [

                ['fecha', 'DESC']

            ]

        });

    }

    async getById(id) {

        return await ServicioRealizado.findByPk(

            id,

            {

                include: [

                    {

                        model: Servicio,

                        as: 'servicio'

                    }

                ]

            }

        );

    }

    async update(id, data) {

        const completed =
            await ServicioRealizado.findByPk(id);

        if (!completed) {

            throw new Error(
                'Servicio realizado no encontrado'
            );

        }

        if (data.servicio_id) {

            const servicio =
                await Servicio.findByPk(
                    data.servicio_id
                );

            if (!servicio) {

                throw new Error(
                    'El servicio no existe'
                );

            }

        }

        await completed.update(data);

        return completed;

    }

    async remove(id) {

        const completed =
            await ServicioRealizado.findByPk(id);

        if (!completed) {

            throw new Error(
                'Servicio realizado no encontrado'
            );

        }

        await completed.destroy();

        return true;

    }

}

module.exports =
    new CompletedServiceService();