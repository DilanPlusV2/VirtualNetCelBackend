class ProductDTO {

    static create(data) {

        return {
            nombre: data.nombre?.trim(),
            descripcion: data.descripcion?.trim() || null,

            precio_compra:
                Number(data.precio_compra),

            precio_venta:
                Number(data.precio_venta),

            categoria_id:
                Number(data.categoria_id),

            ficha_tecnica:
                data.ficha_tecnica || null,

            manual_usuario:
                data.manual_usuario || null,

            activo:
                data.activo ?? true
        };
    }

    static update(data) {

        return {
            nombre: data.nombre?.trim(),
            descripcion: data.descripcion?.trim() || null,

            precio_compra:
                Number(data.precio_compra),

            precio_venta:
                Number(data.precio_venta),

            categoria_id:
                Number(data.categoria_id),

            ficha_tecnica:
                data.ficha_tecnica || null,

            manual_usuario:
                data.manual_usuario || null,

            activo:
                data.activo
        };
    }
}

module.exports = ProductDTO;