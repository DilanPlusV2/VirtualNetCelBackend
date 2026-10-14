const ProductPhotoService =
require('../services/product-photo.service');

class ProductPhotoController {

    static async upload(req, res) {

        try {

            const photo =
                await ProductPhotoService
                    .uploadImage(

                        req.body.producto_id,

                        req.file,

                        req.body.descripcion,

                        req.body.principal === 'true'
                    );

            res.status(201).json({

                message:
                    'Imagen cargada',

                photo
            });

        } catch(error) {

            res.status(400).json({
                message:error.message
            });

        }

    }

    static async getByProduct(
        req,
        res
    ) {

        try {

            const photos =
                await ProductPhotoService
                    .getByProduct(
                        req.params.productId
                    );

            res.json(photos);

        } catch(error) {

            res.status(500).json({
                message:error.message
            });

        }

    }

    static async delete(
        req,
        res
    ) {

        try {

            await ProductPhotoService
                .delete(req.params.id);

            res.json({
                message:
                    'Foto eliminada'
            });

        } catch(error) {

            res.status(400).json({
                message:error.message
            });

        }

    }

}

module.exports =
    ProductPhotoController;