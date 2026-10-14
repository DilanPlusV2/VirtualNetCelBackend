const ProductService =
    require('../services/product.service');

const ProductDTO =
    require('../dto/product.dto');

class ProductController {

    async create(req, res) {

        try {

            const data =
                ProductDTO.create(req.body);

            const product =
                await ProductService.create(data);

            return res.status(201).json({
                message: 'Producto creado',
                product
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });
        }
    }

    async getAll(req, res) {

        try {

            const products =
                await ProductService.getAll();

            return res.json(products);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {

        try {

            const product =
                await ProductService.getById(
                    req.params.id
                );

            if (!product) {

                return res.status(404).json({
                    message:
                        'Producto no encontrado'
                });
            }

            return res.json(product);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {

        try {

            const data =
                ProductDTO.update(req.body);

            const product =
                await ProductService.update(
                    req.params.id,
                    data
                );

            return res.json({
                message:
                    'Producto actualizado',
                product
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });
        }
    }

    async remove(req, res) {

        try {

            await ProductService.remove(
                req.params.id
            );

            return res.json({
                message:
                    'Producto eliminado'
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });
        }
    }
    async uploadManual(
    req,
    res
) {

    try {

        const product =
            await ProductService
                .uploadManual(
                    req.params.id,
                    req.file
                );

        res.json({

            message:
                'Manual cargado',

            product
        });

    } catch(error) {

        res.status(400).json({
            message:error.message
        });

    }

}
async uploadDatasheet(
    req,
    res
) {

    try {

        const product =
            await ProductService
                .uploadDatasheet(
                    req.params.id,
                    req.file
                );

        res.json({

            message:
                'Ficha técnica cargada',

            product
        });

    } catch(error) {

        res.status(400).json({
            message:error.message
        });

    }

}
}

module.exports = new ProductController();