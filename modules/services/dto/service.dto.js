class ServiceDTO {

    static create(data) {

        return {

            nombre: data.nombre,

            descripcion: data.descripcion,

            tipo: data.es_mantenimiento
                ? 'MANTENIMIENTO'
                : 'INSTALACION',

            precio_base:
                data.precio_base || 0,

            activo:
                data.activo === true ||
                data.activo === 'true'

        };

    }

    static update(data) {

        return {

            nombre: data.nombre,

            descripcion: data.descripcion,

            tipo: data.es_mantenimiento
                ? 'MANTENIMIENTO'
                : 'INSTALACION',

            precio_base:
                data.precio_base,

            activo:
                data.activo === true ||
                data.activo === 'true'

        };

    }

}

module.exports = ServiceDTO;