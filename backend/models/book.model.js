import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Book category is required!']
    },
    author: {
        type: String,
        required: [true, 'Book author is required!']
    },
    title: {
        type: String,
        required: [true, 'Book title is required!']
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Book', bookSchema);
