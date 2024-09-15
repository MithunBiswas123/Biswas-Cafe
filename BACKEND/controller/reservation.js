import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const createReservation = async (req, res, next) => {
    const {firstName, lastName, email, phone,  date,time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form", 400));
    }

    try{
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });
        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
        });
    }catch(error){
        if(error.name === "ValidationError"){
            const ValidationError = Object.values(error.errors).map(err =>err.message);
            return next(new ErrorHandler(ValidationError.join(","), 400));
        }
        return next (error);
    }
};

//reservation