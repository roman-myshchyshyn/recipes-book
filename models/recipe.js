const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const RecipeSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    description: { type: String, required: true, minlength: 3, maxlength: 2 ** 12 },
    date: { type: Number, required: true },
    latest: { type: Boolean, required: true }
});

let recipe = Mongoose.model('recipe', RecipeSchema);
module.exports = {
    Recipe: recipe
};
