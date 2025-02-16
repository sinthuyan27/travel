import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';

import tourRout from "./routes/tours.js";
import userRout from "./routes/user.js";
import authRout from "./routes/auth.js";
import reviewRout from "./routes/reviews.js";
import bookingRout from "./routes/booking.js";

dotenv.config()
const app =express();
const port = process.env.PORT || 8000
const corsOptions ={
    origin:true,
    credentials:true
}

//database connection

mongoose.set("strictQuery",false)
const connect = async () => {
    try{
        await mongoose.connect(`mongodb+srv://nanthakumarsinthuyan13:22BpKUMdvsvACPS9@cluster0.1daha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('Mongodb connected successfull');
    }catch(err){
    console.log("MongoDB database connection failed:", err);
    }
}

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/users',userRout);
app.use('/api/v1/auth',authRout);
app.use('/api/v1/review',reviewRout);
app.use('/api/v1/booking',bookingRout);
app.use('/api/v1/tours', tourRout);


app.listen(port, ()=>{
    connect();
    console.log('server listening on port ',port);
})