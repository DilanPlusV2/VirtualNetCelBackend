class UserDTO {

    static create(data, hashedPassword) {

        return {
            nombre: data.nombre,
            email: data.email.toLowerCase(),
            password: hashedPassword,
            activo: true
        };

    }

}

module.exports = UserDTO;