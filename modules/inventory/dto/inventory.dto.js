class InventoryDTO {

    static create(data) {
        return {
            producto_id: data.producto_id,
            tipo: data.tipo,
            cantidad: data.cantidad,
            observacion: data.observacion || null
        };
    }

}

module.exports = InventoryDTO;