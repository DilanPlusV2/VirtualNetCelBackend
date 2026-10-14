const multer = require('multer');
const path = require('path');
const fs = require('fs');

function createFolder(folder) {

    const uploadPath =
        path.join(__dirname, '..', folder);

    if (!fs.existsSync(uploadPath)) {

        fs.mkdirSync(uploadPath, {
            recursive: true
        });

    }

    return uploadPath;

}

const storage = multer.diskStorage({

    destination(req, file, cb) {

        // ===========================
        // IMÁGENES
        // ===========================

        if (file.fieldname === 'image') {

            let folder =
                'uploads/products/images';

            // Blog
            if (
                req.originalUrl.includes('/blog')
            ) {

                folder =
                    'uploads/blog/images';

            }

            // Servicios (para más adelante)
            if (
                req.originalUrl.includes('/services')
            ) {

                folder =
                    'uploads/services/images';

            }

            return cb(
                null,
                createFolder(folder)
            );

        }

        // ===========================
        // MANUALES PDF
        // ===========================

        if (file.fieldname === 'manual') {

            return cb(
                null,
                createFolder(
                    'uploads/products/manuals'
                )
            );

        }

        if (file.fieldname === 'blog_image') {

    return cb(

        null,

        createFolder(
            'uploads/blog/images'
        )

    );

}
if (file.fieldname === 'blog_banner') {

    return cb(

        null,

        createFolder(
            'uploads/blog/banner'
        )

    );

}

if (file.fieldname === 'service_image') {

    return cb(

        null,

        createFolder(

            'uploads/services/images'

        )

    );

}

        // ===========================
        // FICHAS TÉCNICAS
        // ===========================

        if (file.fieldname === 'datasheet') {

            return cb(
                null,
                createFolder(
                    'uploads/products/datasheets'
                )
            );

        }

        cb(
            new Error(
                'Campo de archivo no válido'
            )
        );

    },

    filename(req, file, cb) {

        const uniqueName =

            Date.now()

            + '-'

            + Math.round(
                Math.random() * 1E9
            )

            + path.extname(
                file.originalname
            );

        cb(null, uniqueName);

    }

});

function fileFilter(req, file, cb) {

    // PDFs

    if (

        file.fieldname === 'manual' ||

        file.fieldname === 'datasheet'
        

    ) {

        if (

            file.mimetype !==

            'application/pdf'

        ) {

            return cb(

                new Error(

                    'Solo se permiten archivos PDF'

                ),

                false

            );

        }

        return cb(null, true);

    }

    // Imágenes

    if (

        file.fieldname === 'image' ||

        file.fieldname === 'blog_image' ||

        file.fieldname === 'blog_banner' ||

        file.fieldname === 'service_image'

    ) {

        const allowedImages = [

            'image/jpeg',

            'image/jpg',

            'image/png',

            'image/webp'

        ];

        if (

            !allowedImages.includes(

                file.mimetype

            )

        ) {

            return cb(

                new Error(

                    'Formato de imagen no permitido'

                ),

                false

            );

        }

        return cb(null, true);

    }

    cb(

        new Error(

            'Tipo de archivo no soportado'

        ),

        false

    );

}

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize: 10 * 1024 * 1024

    }

});

module.exports = upload;