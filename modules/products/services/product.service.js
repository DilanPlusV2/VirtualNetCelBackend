const {
    Producto,
    Categoria
} = require('../../../models');

class ProductService {

    async create(data) {

        const categoria =
            await Categoria.findByPk(
                data.categoria_id
            );

        if (!categoria) {
            throw new Error(
                'Categoría no encontrada'
            );
        }

        return await Producto.create({
            ...data,
            stock: 0
        });
    }

    async getAll() {

        return await Producto.findAll({
            include: [
                {
                    model: Categoria,
                    as: 'categoria'
                }
            ],
            order: [['nombre', 'ASC']]
        });
    }

    async getById(id) {

        return await Producto.findByPk(id, {
            include: [
                {
                    model: Categoria,
                    as: 'categoria'
                }
            ]
        });
    }

    async update(id, data) {

        const producto =
            await Producto.findByPk(id);

        if (!producto) {
            throw new Error(
                'Producto no encontrado'
            );
        }

        await producto.update(data);

        return producto;
    }

    async remove(id) {

        const producto =
            await Producto.findByPk(id);

        if (!producto) {
            throw new Error(
                'Producto no encontrado'
            );
        }

        await producto.destroy();

        return true;
    }
    async uploadManual(
    productId,
    file
) {

    const product =
        await Producto.findByPk(productId);

    if (!product) {
        throw new Error(
            'Producto no encontrado'
        );
    }

    await product.update({

        manual_usuario:
            `/uploads/products/manuals/${file.filename}`

    });

    return product;
}

async uploadDatasheet(
    productId,
    file
) {

    const product =
        await Producto.findByPk(productId);

    if (!product) {
        throw new Error(
            'Producto no encontrado'
        );
    }

    await product.update({

        ficha_tecnica:
            `/uploads/products/datasheets/${file.filename}`

    });

    return product;
}
}

module.exports = new ProductService();