class ServiceProductDTO {

    static create(data) {

        return {

            servicio_realizado_id:
                data.servicio_realizado_id,

            producto_id:
                data.producto_id,

            cantidad_utilizada:
                Number(data.cantidad_utilizada)

        };

    }

}

module.exports = ServiceProductDTO;