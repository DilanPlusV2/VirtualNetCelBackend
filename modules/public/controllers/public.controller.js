const PublicService =
require('../services/public.service');

class PublicController{

    async home(req,res){

        try{

            const data =
            await PublicService.getHome();

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

    async products(req,res){

        try{

            const data =
            await PublicService.getProducts();

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

    async product(req,res){

        try{

            const data =
            await PublicService.getProduct(
                req.params.id
            );

            if(!data){

                return res.status(404).json({
                    message:'Producto no encontrado'
                });

            }

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

    async services(req,res){

        try{

            const data =
            await PublicService.getServices();

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

    async service(req,res){

        try{

            const data =
            await PublicService.getService(
                req.params.id
            );

            if(!data){

                return res.status(404).json({
                    message:'Servicio no encontrado'
                });

            }

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

    async blog(req,res){

        try{

            const data =
            await PublicService.getBlogs();

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

    async blogDetail(req,res){

        try{

            const data =
            await PublicService.getBlog(
                req.params.slug
            );

            if(!data){

                return res.status(404).json({
                    message:'Blog no encontrado'
                });

            }

            return res.json(data);

        }catch(error){

            return res.status(500).json({
                message:error.message
            });

        }

    }

}

module.exports =
new PublicController();