const InventoryDTO =
    require('../dto/inventory.dto');

const InventoryService =
    require('../services/inventory.service');

class InventoryController {

    static async create(req, res) {

        try {

            const dto =
                InventoryDTO.create(req.body);

            const movement =
                await InventoryService.create(dto);

            return res.status(201).json({
                message: 'Movimiento registrado',
                movement
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });

        }

    }

    static async getAll(req, res) {

        try {

            const movements =
                await InventoryService.getAll();

            return res.json(movements);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });

        }

    }

    static async getByProduct(req, res) {

        try {

            const movements =
                await InventoryService.getByProduct(
                    req.params.productId
                );

            return res.json(movements);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });

        }

    }

}

module.exports = InventoryController;