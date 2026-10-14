const BlogReferenceService =
    require('../services/blog-reference.service');

const BlogReferenceDTO =
    require('../dto/blog-reference.dto');

class BlogReferenceController {

    async create(req, res) {

        try {

            const data =
                BlogReferenceDTO.create(req.body);

            const reference =
                await BlogReferenceService.create(data);

            return res.status(201).json({

                message:
                    'Referencia agregada',

                reference

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

            const references =
                await BlogReferenceService.getByBlog(

                    req.params.blogId

                );

            return res.json(references);

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

            const data =
                BlogReferenceDTO.update(req.body);

            const reference =
                await BlogReferenceService.update(

                    req.params.id,

                    data

                );

            return res.json({

                message:
                    'Referencia actualizada',

                reference

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

            await BlogReferenceService.delete(

                req.params.id

            );

            return res.json({

                message:
                    'Referencia eliminada'

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
    new BlogReferenceController();