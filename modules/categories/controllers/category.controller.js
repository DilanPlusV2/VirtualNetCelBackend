const CategoryService = require('../services/category.service');
const CategoryDTO = require('../dto/category.dto');

class CategoryController {

    async create(req, res) {

        try {

            const data = CategoryDTO.create(req.body);

            const category =
                await CategoryService.create(data);

            return res.status(201).json({
                message: 'Categoría creada',
                category
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });
        }
    }

    async getAll(req, res) {

        try {

            const categories =
                await CategoryService.getAll();

            return res.json(categories);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {

        try {

            const category =
                await CategoryService.getById(req.params.id);

            if (!category) {
                return res.status(404).json({
                    message: 'Categoría no encontrada'
                });
            }

            return res.json(category);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {

        try {

            const data = CategoryDTO.update(req.body);

            const category =
                await CategoryService.update(
                    req.params.id,
                    data
                );

            return res.json({
                message: 'Categoría actualizada',
                category
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {

        try {

            await CategoryService.delete(
                req.params.id
            );

            return res.json({
                message: 'Categoría eliminada'
            });

        } catch (error) {

            return res.status(400).json({
                message: error.message
            });
        }
    }
}

module.exports = new CategoryController();