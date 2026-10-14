const {
    Producto,
    ProductoFoto
} = require('../../../models');

class ProductPhotoService {

    static async uploadImage(
        productoId,
        file,
        descripcion,
        principal
    ) {

        const producto =
            await Producto.findByPk(productoId);

        if (!producto) {
            throw new Error(
                'Producto no encontrado'
            );
        }

        if (principal) {

            await ProductoFoto.update(
                {
                    principal: false
                },
                {
                    where: {
                        producto_id: productoId
                    }
                }
            );
        }

        return await ProductoFoto.create({

            producto_id: productoId,

            ruta_archivo:
                `/uploads/products/images/${file.filename}`,

            descripcion,

            principal
        });

    }

    static async getByProduct(productoId) {

        return await ProductoFoto.findAll({

            where: {
                producto_id: productoId
            },

            order: [
                ['principal', 'DESC']
            ]
        });

    }

    static async delete(id) {

        const photo =
            await ProductoFoto.findByPk(id);

        if (!photo) {
            throw new Error(
                'Foto no encontrada'
            );
        }

        await photo.destroy();

        return true;
    }

}

module.exports = ProductPhotoService;