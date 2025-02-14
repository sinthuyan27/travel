import express from 'express';
import { createReview } from '../controllers/reviewcontroller.js';
import{ verifyAdmin, verifyUser} from "../utils/verifyToken.js"
import { getAllBooking, getBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post("/", verifyUser, createReview);
router.get("/:id", verifyUser, getBooking);
router.post("/", verifyAdmin, getAllBooking);


export default router