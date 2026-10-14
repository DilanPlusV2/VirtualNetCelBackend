class BlogImageDTO {

    static create(data) {

        return {

            blog_id: data.blog_id,

            titulo_imagen: data.titulo_imagen,

            descripcion: data.descripcion,

            orden: data.orden || 1

        };

    }

}

module.exports = BlogImageDTO;