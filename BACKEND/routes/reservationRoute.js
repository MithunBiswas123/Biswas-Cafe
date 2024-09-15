import express from 'express';
import {createReservation} from "../controller/reservation.js";
const router = express.Router();

router.post('/send',createReservation);



export default router; 

//reservation