const Item=require("../models/item").Item;

const getAllItem=async(req, res)=>{
    try {
        let i=await Item.find({});
        return res.send(i);
    } 
    catch (error) {
        res.status(400).send(error);
    }

}

const getItembyId=async(req, res)=>{
    let idi= req.params.id;
    try {
        let i=await Item.findById(idi);
        return res.send(i);
    } 
    catch (error) {
        res.status(400).send(error);
    }
}


const addItem=async(req, res)=>{
    try {
let i=new Item(req.body)
await i.save();
return res.send(i);
} 
    catch (error) {
        res.status(400).send(error);
    }
}

const deleteItem=async(req, res)=>{
    let idi=req.params.id;
    try {
        let i=await Item.findByIdAndDelete(idi)
        return res.send(i);
    } 
    catch (error) {
        res.status(400).send(error);
    }
}
module.exports={
    getAllItem,getItembyId,addItem,deleteItem
}



