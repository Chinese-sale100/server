const router = require("express").Router();
const winningController=require("../controllers/winning");

router.get("/:productId",winningController.getWinnerByProductId);
router.get("/:winningId",winningController.getWinnerByWinningId);
router.post("",winningController.addWinning);

module.exports=router;