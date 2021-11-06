import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import wishlistRoutes from './routes/wishlistRoutes.js'
import cartRoutes from './routes/cartRoutes.js';
import multer from 'multer';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import uuid from 'uuidv4';
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
import path from 'path';


const upload = multer({ dest: 'uploads/' })

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);


const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} mode`)
);
