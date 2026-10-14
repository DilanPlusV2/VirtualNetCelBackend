const BlogImageService =
    require('../services/blog-image.service');

const BlogImageDTO =
    require('../dto/blog-image.dto');

class BlogImageController {

    async create(req, res) {

        try {

            const data =
                BlogImageDTO.create(
                    req.body
                );

            const image =
                await BlogImageService.create(

                    data,

                    req.file

                );

            return res.status(201).json({

                message:
                    'Imagen agregada al blog',

                image

            });

        }

        catch (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async getByBlog(req, res) {

        try {

            const images =
                await BlogImageService
                    .getByBlog(

                        req.params.blogId

                    );

            return res.json(images);

        }

        catch (error) {

            return res.status(500).json({

                message:
                    error.message

            });

        }

    }

    async update(req, res) {

    try {

        const data = BlogImageDTO.create(req.body);

        const image = await BlogImageService.update(

            req.params.id,

            data

        );

        return res.json({

            message: 'Imagen actualizada',

            image

        });

    }

    catch (error) {

        return res.status(400).json({

            message: error.message

        });

    }

}

    async uploadImage(req, res) {

        try {

            const image =
                await BlogImageService
                    .uploadImage(

                        req.params.id,

                        req.file

                    );

            return res.json({

                message:
                    'Imagen reemplazada',

                image

            });

        }

        catch (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }

    }

    async delete(req, res) {

        try {

            await BlogImageService.delete(

                req.params.id

            );

            return res.json({

                message:
                    'Imagen eliminada'

            });

        }

        catch (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }

    }

}

module.exports =
    new BlogImageController();