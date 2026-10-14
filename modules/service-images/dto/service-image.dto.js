class ServiceImageDTO {

    static create(data) {

        return {

            servicio_id: data.servicio_id,

            titulo: data.titulo,

            descripcion: data.descripcion,

            principal:
                data.principal === true ||
                data.principal === 'true'

        };

    }

    static update(data) {

        return {

            titulo: data.titulo,

            descripcion: data.descripcion,

            principal:
                data.principal === true ||
                data.principal === 'true'

        };

    }

}

module.exports = ServiceImageDTO;