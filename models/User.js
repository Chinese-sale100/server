const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
     user_first_name:String,
     user_last_name:String,
     user_phone:{type:String,match:/[0-9]{9,11}/},
     arr_orders:[orderSchema]

});

const User=mongoose.model("users",userSchema);

module.export={
    userSchema,
    User
}