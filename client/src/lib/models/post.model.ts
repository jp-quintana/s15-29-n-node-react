import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import leanVirtuals from 'mongoose-lean-virtuals';

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

postSchema.virtual('id').get(function () {
  return this._id.toString();
});

postSchema.set('toJSON', { virtuals: true });

postSchema.set('toObject', { virtuals: true });

postSchema.plugin(paginate);

postSchema.plugin(leanVirtuals);

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);

export default Post;
