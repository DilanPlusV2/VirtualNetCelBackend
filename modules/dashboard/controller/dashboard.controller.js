const DashboardService =
require('../services/dashboard.service');

class DashboardController{

    async getDashboard(req,res){

        try{

            const dashboard=
            await DashboardService.getDashboard();

            return res.json(dashboard);

        }

        catch(error){

            return res.status(500).json({

                message:error.message

            });

        }

    }

}

module.exports=
new DashboardController();