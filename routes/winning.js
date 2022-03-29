const router = require("express").Router();
const winningController=require("../controllers/winning");

router.get("",winningController.getWinnerByProductId);
router.get("/:id",winningController.getWinnerByWinningId);
router.post("",winningController.addWinning);

module.exports=router;