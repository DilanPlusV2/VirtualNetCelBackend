const{

    Blog,
    BlogImagen,
    BlogReferencia

}=require('../../../models');

class BlogService{

    async create(data){

        return await Blog.create(data);

    }

    async getAll(){

        return await Blog.findAll({

            include:[

                {

                    model:BlogImagen,

                    as:'imagenes'

                }

            ],

            order:[

                ['fecha_publicacion','DESC']

            ]

        });

    }

    async getById(id){

        return await Blog.findByPk(

            id,

            {

                include:[

                    {

                        model:BlogImagen,

                        as:'imagenes'

                    },

                    {

                        model:BlogReferencia,

                        as:'referencias'

                    }

                ]

            }

        );

    }

    async update(id,data){

        const blog=
            await Blog.findByPk(id);

        if(!blog){

            throw new Error(
                'Publicación no encontrada'
            );

        }

        await blog.update(data);

        return blog;

    }

    async uploadBanner(id,file){

        const blog=
            await Blog.findByPk(id);

        if(!blog){

            throw new Error(
                'Publicación no encontrada'
            );

        }

        await blog.update({

            imagen_portada:
                `/uploads/blog/banner/${file.filename}`

        });

        return blog;

    }

    async like(id){

        const blog=
            await Blog.findByPk(id);

        if(!blog){

            throw new Error(
                'Publicación no encontrada'
            );

        }

        blog.likes++;

        await blog.save();

        return blog;

    }

}

module.exports=
    new BlogService();