const router = require("express").Router();
const itemController=require("../controllers/item");

router.get("",itemController.getAllItem);
router.get("/:id",itemController.getItembyId);
router.post("",itemController.addItem);
router.delete("/:id",itemController.deleteItem);

module.exports=router;