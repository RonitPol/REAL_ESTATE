import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log(err);
    });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});