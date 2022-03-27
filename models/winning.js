const mongoose = require("mongoose");

const winningSchema = new mongoose.Schema({
    id: String,
    user_id: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    item_id: [{ type: mongoose.Types.ObjectId, ref: "products" }],
    winning_date: { type: Date, default: Date.now() }
});

const Winning= mongoose.model("winnings", winningSchema);

module.exports = {
    winningSchema,
    Winning
}