import mongoose from 'mongoose';

export const connectDB=async()=>{
    await mongoose.connect(
        'mongodb+srv://santhosh:P5vDOf004swizA40@node1.3srb4lx.mongodb.net/bugBuddy'
    )
};


