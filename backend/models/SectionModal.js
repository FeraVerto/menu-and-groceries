import mongoose from 'mongoose';
const { Schema } = mongoose;

const SectionSchema = new Schema({
  name: {
    ref: 'sections',
    type: Schema.Types.ObjectId,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

export default mongoose.model('section', SectionSchema);
