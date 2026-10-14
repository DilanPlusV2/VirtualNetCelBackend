class BlogReferenceDTO {

    static create(data) {

        return {

            blog_id: data.blog_id,

            titulo: data.titulo,

            autores: data.autores,

            url: data.url,

            anio: data.anio

        };

    }

    static update(data) {

        return {

            titulo: data.titulo,

            autores: data.autores,

            url: data.url,

            anio: data.anio

        };

    }

}

module.exports = BlogReferenceDTO;