const {

    Categoria,

    Producto,

    ProductoFoto,

    Servicio,

    ServicioImagen,

    Blog,

    BlogImagen,

    BlogReferencia,

    ServicioRealizado,

    ServicioProducto

} = require('../../../models');

const { fn, col } = require('sequelize');

const {

    Op

} = require('sequelize');

class PublicService{

    async getHome(){

        let [

    productos,

    categorias,

    servicios,

    serviciosRealizados,

    productosInstalados,

    clientesSatisfechos

] = await Promise.all([

    Producto.count({

        where:{
            activo:true
        }

    }),

    Categoria.count(),

    Servicio.count({

        where:{
            activo:true
        }

    }),

    ServicioRealizado.count(),

    ServicioProducto.sum(
        'cantidad_utilizada',
        {
            include:[
                {
                    model:ServicioRealizado,
                    as:'servicioRealizado',
                    where:{
                        descontar_inventario:true
                    },
                    required:true
                }
            ]
        }
    ),

    ServicioRealizado.count({

        where:{
            testimonio:{
                [Op.ne]:null
            }
        }

    })

]);

productosInstalados ??= 0;

        const serviciosDestacados =
        await Servicio.findAll({

            where:{

                activo:true

            },

            include:[

                {

                    model:ServicioImagen,

                    as:'imagenes'

                }

            ],

            limit:6,

            order:[

                ['createdAt','DESC']

            ]

        });

        const productosDestacados =
        await Producto.findAll({

            where:{

                activo:true

            },

            include:[

                {

                    model:ProductoFoto,

                    as:'fotos'

                },

                {

                    model:Categoria,

                    as:'categoria'

                }

            ],

            limit:8,

            order:[

                ['createdAt','DESC']

            ]

        });

        const testimonios =
        await ServicioRealizado.findAll({

            where:{

                testimonio:{

                    [Op.ne]:null

                }

            },

            limit:8,

            order:[

                ['fecha','DESC']

            ]

        });

        return{

    estadisticas:{
        productos,
        categorias,
        servicios
    },

    indicadores:{

        serviciosRealizados,

        productosInstalados,

        clientesSatisfechos

    },

    productosDestacados,

    serviciosDestacados,

    testimonios

};

    }

    async getProducts(){

        return await Categoria.findAll({

            order:[

                ['nombre','ASC']

            ],

            include:[

                {

                    model:Producto,

                    as:'productos',

                    where:{

                        activo:true

                    },

                    required:false,

                    include:[

                        {

                            model:ProductoFoto,

                            as:'fotos'

                        }

                    ]

                }

            ]

        });

    }

    async getProduct(id){

        return await Producto.findByPk(id,{

            include:[

                {

                    model:Categoria,

                    as:'categoria'

                },

                {

                    model:ProductoFoto,

                    as:'fotos'

                }

            ]

        });

    }

    async getServices() {

    return await Servicio.findAll({

        where: {
            activo: true
        },

        include: [

            {
                model: ServicioImagen,
                as: 'imagenes'
            }

        ],

        order: [
            ['createdAt', 'DESC']
        ]

    });

}

    async getService(id){

    return await Servicio.findByPk(id,{

        include:[

            {
                model:ServicioImagen,
                as:'imagenes'
            }

        ]

    });

}

    async getBlogs() {

    return await Blog.findAll({

        where: {

            publicado: true

        },

        attributes: {

            exclude: ['contenido']

        },

        include: [

            {

                model: BlogImagen,

                as: 'imagenes'

            }

        ],

        order: [

            ['fecha_publicacion', 'DESC']

        ]

    });

}

async getBlog(slug){

    return await Blog.findOne({

        where:{
            slug,
            publicado:true
        },

        include:[

            {

                model:BlogImagen,

                as:'imagenes',

                separate:true,

                order:[
                    ['orden','ASC']
                ]

            },

            {

                model:BlogReferencia,

                as:'referencias',

                separate:true,

                order:[
                    ['createdAt','ASC']
                ]

            }

        ]

    });

}

}

module.exports = new PublicService();