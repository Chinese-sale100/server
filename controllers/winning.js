const Winning=require("../models/Winning").Winning;
const User=require("../models/User").user;

const addWinning=async(req,res)=>{
    try {
        let w=new Winning(req.body);
        await w.save;
        return res.send(w)
    } catch (error) {
        return res.status(400).send(error);
    }
}

const getWinnerByWinningId=async(req, res)=>{
    try {
        let w=await Winning.findById(req.params.id);
        return res.send(w);
    } catch (error) {
        return res.status(400).send(error);
    }
}
const getWinnerByProductId=async(req, res)=>{
    let pid=req.params.id
    try {
        let w=await Winning.find({item_id:pid});
        return res.send(w);
    } catch (error) {
        return res.status(400).send(error);
    }
}
const getUsersByProductId=async(req, res)=>{
    let pid=req.params.id;
    try {
        let users = await User.find({}).filter(user=>{user.arr_orders.find(order=>order.item_id==pid)!=-1});
        return res.send(users);
    } catch (error) {
        return res.status(400).send(error);
    }
}
module.exports = {
    addWinning,getWinnerByWinningId, getWinnerByProductId, getUsersByProductId
}