import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import cors from "cors";
import "dotenv/config";



const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

// app.use(cors)
app.use(express.json());
UserRoutes(app);

app.listen(process.env.PORT || 4000);
app.use(express.json());


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/sportsWeb'
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);