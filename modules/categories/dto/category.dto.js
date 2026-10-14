class CategoryDTO {
    static create(data) {
        return {
            nombre: data.nombre?.trim(),
            descripcion: data.descripcion?.trim() || null
        };
    }

    static update(data) {
        return {
            nombre: data.nombre?.trim(),
            descripcion: data.descripcion?.trim() || null
        };
    }
}

module.exports = CategoryDTO;