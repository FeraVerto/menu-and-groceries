import mongoose from 'mongoose';
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
});

export default mongoose.model('ingredient', ingredientSchema);
