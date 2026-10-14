const { Categoria } = require('../../../models');

class CategoryService {

    async create(data) {

        const exists = await Categoria.findOne({
            where: {
                nombre: data.nombre
            }
        });

        if (exists) {
            throw new Error('La categoría ya existe');
        }

        return await Categoria.create(data);
    }

    async getAll() {
        return await Categoria.findAll({
            order: [['nombre', 'ASC']]
        });
    }

    async getById(id) {
        return await Categoria.findByPk(id);
    }

    async update(id, data) {

        const category = await Categoria.findByPk(id);

        if (!category) {
            throw new Error('Categoría no encontrada');
        }

        await category.update(data);

        return category;
    }

    async delete(id) {

        const category = await Categoria.findByPk(id);

        if (!category) {
            throw new Error('Categoría no encontrada');
        }

        await category.destroy();

        return true;
    }
}

module.exports = new CategoryService();