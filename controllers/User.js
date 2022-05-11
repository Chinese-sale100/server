const User = require('../models/user').User

const AddUser = async (req, res) => {
    try {
        let user = new User(req.body);
        await user.save();
        return res.send(user);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const GetAllProductsByUserId = async (req, res) => {
    try {
        let userWithProducts = await User.findById( req.params.id );
        return res.send(userWithProducts.arr_orders);
    }
    catch (e) {
        return res.status(400).send(e);

    }
}
const AddOrderToUser = async (req, res) => {
    try {
        let user = req.body.user;
        let u = User.findById(user.id).then(function (result) {
            if (!result) {
                let newUser = new User(user);
                await newUser.save()
            }
            else {
                return result.dataValues;
            }
        })
        u.arr_orders.push(req.body.user.arr_orders);
        await u.save();
    }
    catch (e) {
        return res.status(400).send(e);

    }
}