import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  isAuction: { type: Boolean, required: true, default: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  lastBid: {
    price: { type: Number },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  startDate: { type: Date },
  endDate: { type: Date },
});

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
