const router = require("express").Router();
const userController=require("../controllers/User");

router.post("",userController.AddUser);
router.get("/:id",userController.GetAllProductsByUserId);
router.post("",userController.AddOrderToUser);

module.exports=router;