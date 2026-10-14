const {
    Blog,
    BlogImagen
} = require('../../../../models');

class BlogImageService {

    async create(
        data,
        file
    ) {

        const blog =
            await Blog.findByPk(
                data.blog_id
            );

        if (!blog) {

            throw new Error(
                'La publicación no existe'
            );

        }

        return await BlogImagen.create({

    blog_id: data.blog_id,

    titulo_imagen: data.titulo_imagen,

    descripcion: data.descripcion,

    orden: data.orden,

    ruta_archivo: `/uploads/blog/images/${file.filename}`

});

    }

    async getByBlog(blogId) {

        return await BlogImagen.findAll({

            where: {

                blog_id: blogId

            },

            order: [

                ['orden', 'ASC']

            ]

        });

    }

    async update(
        id,
        data
    ) {

        const image =
            await BlogImagen.findByPk(id);

        if (!image) {

            throw new Error(
                'Imagen no encontrada'
            );

        }

        await image.update({

    titulo_imagen: data.titulo_imagen,

    descripcion: data.descripcion,

    orden: data.orden

});

        return image;

    }

    async uploadImage(
        id,
        file
    ) {

        const image =
            await BlogImagen.findByPk(id);

        if (!image) {

            throw new Error(
                'Imagen no encontrada'
            );

        }

        await image.update({

    ruta_archivo:
        `/uploads/blog/images/${file.filename}`

});

        return image;

    }

    async delete(id) {

        const image =
            await BlogImagen.findByPk(id);

        if (!image) {

            throw new Error(
                'Imagen no encontrada'
            );

        }

        await image.destroy();

        return true;

    }

}

module.exports =
    new BlogImageService();