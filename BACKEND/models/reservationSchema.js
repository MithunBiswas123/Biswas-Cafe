//import express from "express";
import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength:[3,"First name must be at least 3 characters"],
        maxLength:[20,"First name cannot exceed  20 characters"],
    },
     lastName:{
        type: String,
        required:true,
        minLength:[3,"Last name must be at least 3 characters"],
        maxLength:[20,"Last name cannot exceed  20 characters"],
    },
    email:{
        type: String,
        required:true,
        validate:[validator.isEmail,"Please provide a valid email"]
    },
    phone:{
        type: String,
        required:true,
        minLength:[10,"Phone number must be at least 10 characters"],
        maxLength:[15,"Phone number cannot exceed  15 characters"],
    },
    time:{
        type: String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

//reservationRoute