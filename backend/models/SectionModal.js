import mongoose from 'mongoose';
const { Schema } = mongoose;

const SectionSchema = new Schema({
  name: {
    type: String,
    ref: 'dishes',
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

export default mongoose.model('section', SectionSchema);
