const { MovimientoInventario, Producto } =
    require('../../../models');

class InventoryService {

    static async create(data) {

        const producto =
            await Producto.findByPk(data.producto_id);

        if (!producto) {
            throw new Error('Producto no encontrado');
        }

        const stockAnterior = producto.stock;
        let stockNuevo = stockAnterior;

        switch (data.tipo) {

            case 'ENTRADA':
                stockNuevo =
                    stockAnterior + data.cantidad;
                break;

            case 'SALIDA':

                if (stockAnterior < data.cantidad) {
                    throw new Error(
                        'Stock insuficiente'
                    );
                }

                stockNuevo =
                    stockAnterior - data.cantidad;
                break;

            case 'AJUSTE_POSITIVO':

                stockNuevo =
                    stockAnterior + data.cantidad;
                break;

            case 'AJUSTE_NEGATIVO':

                if (stockAnterior < data.cantidad) {
                    throw new Error(
                        'Stock insuficiente'
                    );
                }

                stockNuevo =
                    stockAnterior - data.cantidad;
                break;

            default:
                throw new Error(
                    'Tipo de movimiento inválido'
                );
        }

        const movimiento =
            await MovimientoInventario.create({
                producto_id: data.producto_id,
                tipo: data.tipo,
                cantidad: data.cantidad,
                stock_anterior: stockAnterior,
                stock_nuevo: stockNuevo,
                observacion: data.observacion
            });

        await producto.update({
            stock: stockNuevo
        });

        return movimiento;
    }

    static async getAll() {

        return await MovimientoInventario.findAll({
            include: [
                {
                    model: Producto,
                    as: 'producto'
                }
            ],
            order: [['createdAt', 'DESC']]
        });

    }

    static async getByProduct(productoId) {

        return await MovimientoInventario.findAll({
            where: {
                producto_id: productoId
            },
            order: [['createdAt', 'DESC']]
        });

    }

}

module.exports = InventoryService;