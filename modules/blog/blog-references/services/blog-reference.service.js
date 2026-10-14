const {
    Blog,
    BlogReferencia
} = require('../../../../models');

class BlogReferenceService {

    async create(data) {

        const blog =
            await Blog.findByPk(data.blog_id);

        if (!blog) {

            throw new Error(
                'La publicación no existe'
            );

        }

        return await BlogReferencia.create(data);

    }

    async getByBlog(blogId) {

        return await BlogReferencia.findAll({

            where: {

                blog_id: blogId

            },

            order: [

                ['id', 'ASC']

            ]

        });

    }

    async update(id, data) {

        const reference =
            await BlogReferencia.findByPk(id);

        if (!reference) {

            throw new Error(
                'Referencia no encontrada'
            );

        }

        await reference.update(data);

        return reference;

    }

    async delete(id) {

        const reference =
            await BlogReferencia.findByPk(id);

        if (!reference) {

            throw new Error(
                'Referencia no encontrada'
            );

        }

        await reference.destroy();

        return true;

    }

}

module.exports =
    new BlogReferenceService();