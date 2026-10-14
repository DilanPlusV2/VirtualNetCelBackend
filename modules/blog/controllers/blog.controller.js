const BlogService =
    require('../services/blog.service');

const BlogDTO =
    require('../dto/blog.dto');

class BlogController {

    async create(req, res) {

        try {

            const data =
                BlogDTO.create(req.body);

            const blog =
                await BlogService.create(data);

            return res.status(201).json({

                message:
                    'Publicación creada',

                blog

            });

        }

        catch(error){

            return res.status(400).json({

                message:error.message

            });

        }

    }

    async getAll(req,res){

        try{

            const blogs=
                await BlogService.getAll();

            return res.json(blogs);

        }

        catch(error){

            return res.status(500).json({

                message:error.message

            });

        }

    }

    async getById(req,res){

        try{

            const blog=
                await BlogService.getById(
                    req.params.id
                );

            if(!blog){

                return res.status(404).json({

                    message:'Publicación no encontrada'

                });

            }

            return res.json(blog);

        }

        catch(error){

            return res.status(500).json({

                message:error.message

            });

        }

    }

    async update(req,res){

        try{

            const data=
                BlogDTO.update(req.body);

            const blog=
                await BlogService.update(
                    req.params.id,
                    data
                );

            return res.json({

                message:'Publicación actualizada',

                blog

            });

        }

        catch(error){

            return res.status(400).json({

                message:error.message

            });

        }

    }

    async uploadBanner(req,res){

        try{

            const blog=
                await BlogService.uploadBanner(
                    req.params.id,
                    req.file
                );

            return res.json({

                message:'Banner actualizado',

                blog

            });

        }

        catch(error){

            return res.status(400).json({

                message:error.message

            });

        }

    }

    async like(req,res){

        try{

            const blog=
                await BlogService.like(
                    req.params.id
                );

            return res.json(blog);

        }

        catch(error){

            return res.status(400).json({

                message:error.message

            });

        }

    }

}

module.exports =
    new BlogController();