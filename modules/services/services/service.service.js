const {

    Servicio

} = require('../../../models');

class ServiceService {

    async create(data) {

        return await Servicio.create(data);

    }

    async getAll() {

        return await Servicio.findAll({

            order: [

                ['nombre', 'ASC']

            ]

        });

    }

    async getById(id) {

        return await Servicio.findByPk(id);

    }

    async update(id, data) {

        const service =
            await Servicio.findByPk(id);

        if (!service) {

            throw new Error(
                'Servicio no encontrado'
            );

        }

        await service.update(data);

        return service;

    }

    async remove(id) {

        const service =
            await Servicio.findByPk(id);

        if (!service) {

            throw new Error(
                'Servicio no encontrado'
            );

        }

        await service.destroy();

        return true;

    }

}

module.exports =
    new ServiceService();