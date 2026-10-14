const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    '/uploads',
    express.static(
        path.join(
            __dirname,
            'uploads'
        )
    )
);

const authRoutes =
require('./modules/users/routes/auth.routes');

app.use('/api/auth', authRoutes);

const categoryRoutes =
require('./modules/categories/routes/category.route');

app.use(
    '/api/categories',
    categoryRoutes
);

const productRoutes =
require('./modules/products/routes/product.route');

app.use(
    '/api/products',
    productRoutes
);

const inventoryRoutes =
    require('./modules/inventory/routes/inventory.route');

app.use(
    '/api/inventory',
    inventoryRoutes
);

const productPhotoRoutes =
require(
    './modules/product-photos/routes/product-photo.route'
);

const dashboardRoutes=
require('./modules/dashboard/routes/dashboard.route');

app.use(
    '/api/product-photos',
    productPhotoRoutes
);

const blogRoutes =
require('./modules/blog/routes/blog.route');

const blogImageRoutes =
require('./modules/blog/blog-images/routes/blog-image.route');

const blogReferenceRoutes =
require('./modules/blog/blog-references/routes/blog-reference.route');

const serviceRoutes =
require('./modules/services/routes/service.route');

const completedServiceRoutes =
require('./modules/completed-services/routes/completed-service.route');

const serviceProductRoutes =
require('./modules/service-products/routes/service-product.route');

const serviceImageRoutes =
require(
    './modules/service-images/routes/service-image.route'
);
const publicRoutes =
require('./modules/public/routes/public.route');

app.use(

    '/api/dashboard',

    dashboardRoutes

);
app.use(

    '/api/service-images',

    serviceImageRoutes

);

app.use(
    '/api/service-products',
    serviceProductRoutes
);

app.use(

    '/api/completed-services',

    completedServiceRoutes

);

app.use(

    '/api/services',

    serviceRoutes

);

app.use(
    '/api/blog',
    blogRoutes
);

app.use(
    '/api/blog-images',
    blogImageRoutes
);

app.use(
    '/api/blog-references',
    blogReferenceRoutes
);

app.use(
    '/api/public',
    publicRoutes
);

app.get('/', (req, res) => {

    res.json({
        message: 'Proyecto0 API'
    });

});

module.exports = app;