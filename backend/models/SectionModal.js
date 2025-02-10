import mongoose from 'mongoose';
const { Schema } = mongoose;

const SectionSchema = new Schema({
  sectionName: {
    type: String,
  },
  name: {
    ref: 'sections',
    type: mongoose.Schema.Types.ObjectId,
  },
  user: {
    required: true,
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
});

export default mongoose.model('Section', SectionSchema);
