const {

    Producto,

    Categoria,

    Servicio,

    Blog,

    MovimientoInventario,

    ServicioRealizado

} = require('../../../models');

const {

    Op,

    fn,

    col

} = require('sequelize');

class DashboardService{

    async getDashboard(){

        const [

            productos,

            categorias,

            servicios,

            blogs,

            inventarioBajo,

            instalaciones,

            mantenimientos,

            testimonios,

            ultimosServicios,

            ultimosBlogs

        ]=await Promise.all([

            Producto.count(),

            Categoria.count(),

            Servicio.count(),

            Blog.count(),

            Producto.count({

            where:{

                stock:{

                    [Op.lte]:5

                }

            }

        }),

            Servicio.count({

                where:{

                    tipo:'INSTALACION'

                }

            }),

            Servicio.count({

                where:{

                    tipo:'MANTENIMIENTO'

                }

            }),

            ServicioRealizado.count({

                where:{

                    testimonio:{

                        [Op.ne]:null

                    }

                }

            }),

            ServicioRealizado.findAll({

                limit:5,

                order:[

                    ['fecha','DESC']

                ],

                include:[

                    {

                        model:Servicio,

                        as:'servicio'

                    }

                ]

            }),

            Blog.findAll({

                limit:5,

                order:[

                    ['createdAt','DESC']

                ]

            })

        ]);

        return{

            cards:{

                productos,

                categorias,

                servicios,

                blogs,

                inventario:inventarioBajo,

                instalaciones,

                mantenimientos,

                testimonios

            },

            charts:{},

            ultimosServicios,

            ultimosBlogs

        };

    }

}

module.exports=
new DashboardService();