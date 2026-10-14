class ProductPhotoDTO {

    static create(data) {

        return {
            producto_id: data.producto_id,
            descripcion: data.descripcion,
            principal: data.principal || false
        };

    }

}

module.exports = ProductPhotoDTO;