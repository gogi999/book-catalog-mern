import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(() => console.log('MongoDB Successfully Connected!'))
        .catch((err) => console.log(err));
}

export default dbConnect;
