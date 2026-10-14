const {

    ServicioProducto,
    ServicioRealizado,
    Servicio,
    Producto,
    MovimientoInventario

} = require('../../../models');

class ServiceProductService {

    async create(data) {

        const servicioRealizado =
            await ServicioRealizado.findByPk(
                data.servicio_realizado_id,
                {
                    include: [
                        {
                            model: Servicio,
                            as: 'servicio'
                        }
                    ]
                }
            );

        if (!servicioRealizado) {

            throw new Error(
                'Servicio realizado no encontrado'
            );

        }

        const producto =
            await Producto.findByPk(
                data.producto_id
            );

        if (!producto) {

            throw new Error(
                'Producto no encontrado'
            );

        }

        const relacion =
            await ServicioProducto.create(data);

        /**
         * Solo descontamos inventario
         * cuando NO es mantenimiento.
         */

        if (

            servicioRealizado.servicio.tipo !==
            'MANTENIMIENTO'

        ) {

            // =====================
            // Stock del producto
            // =====================

            if (

                producto.stock <
                data.cantidad_utilizada

            ) {

                throw new Error(
                    'Stock insuficiente'
                );

            }

            producto.stock -=
                data.cantidad_utilizada;

            await producto.save();

            // =====================
            // Movimiento inventario
            // =====================

            const inventario =
                await MovimientoInventario.findOne({

                    where: {

                        producto_id:
                            data.producto_id

                    }

                });

            if (inventario) {

                if (

                    inventario.stock_actual <
                    data.cantidad_utilizada

                ) {

                    throw new Error(
                        'Inventario insuficiente'
                    );

                }

                inventario.stock_actual -=
                    data.cantidad_utilizada;

                await inventario.save();

            }

        }

        return relacion;

    }

    async getByCompletedService(id) {

        return await ServicioProducto.findAll({

            where: {

                servicio_realizado_id: id

            },

            include: [

                {

                    model: Producto,
                    as: 'producto'

                }

            ]

        });

    }

    async update(id, data) {

        const relacion =
            await ServicioProducto.findByPk(id);

        if (!relacion) {

            throw new Error(
                'Relación no encontrada'
            );

        }

        await relacion.update({

            cantidad_utilizada:
                data.cantidad_utilizada

        });

        return relacion;

    }

    async delete(id) {

        const relacion =
            await ServicioProducto.findByPk(id);

        if (!relacion) {

            throw new Error(
                'Relación no encontrada'
            );

        }

        await relacion.destroy();

        return true;

    }

}

module.exports =
    new ServiceProductService();