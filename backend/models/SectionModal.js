import mongoose from 'mongoose';
const { Schema } = mongoose;

const SectionSchema = new Schema({
  sectionName: {
    type: String,
  },
  // name: {
  //   ref: 'sections',
  //   type: mongoose.Schema.Types.ObjectId,
  // },
  dishes: [
    {
      ref: 'dishes',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  userId: {
    required: true,
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
});

SectionSchema.path('dishes').default([]);

export default mongoose.model('Section', SectionSchema);
