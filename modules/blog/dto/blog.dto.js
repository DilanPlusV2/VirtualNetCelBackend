class BlogDTO {

    static create(data){

        return{

            titulo:data.titulo,

            resumen:data.resumen,

            contenido:data.contenido,

            autor:data.autor,

            slug:data.slug,

            publicado:
                data.publicado === true ||
                data.publicado === 'true'

        };

    }

    static update(data){

        return{

            titulo:data.titulo,

            resumen:data.resumen,

            contenido:data.contenido,

            autor:data.autor,

            slug:data.slug,

            publicado:
                data.publicado === true ||
                data.publicado === 'true'

        };

    }

}

module.exports=BlogDTO;