class CompletedServiceDTO {

    static create(data) {

        return {

            servicio_id:
                data.servicio_id,

            cliente:
                data.cliente,

            empresa:
                data.empresa,

            telefono:
                data.telefono,

            direccion:
                data.direccion,

            ciudad:
                data.ciudad,

            tecnico:
                data.tecnico,

            fecha:
                data.fecha,

            observaciones:
                data.observaciones,

            testimonio:
                data.testimonio,

            valor_cobrado:
                data.valor_cobrado,

            descontar_inventario:
                data.descontar_inventario === true ||
                data.descontar_inventario === 'true',

            estado:
                data.estado

        };

    }

    static update(data) {

        return this.create(data);

    }

}

module.exports = CompletedServiceDTO;