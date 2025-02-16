import express, { Router } from "express";
import { createTour, getSingleTour, updateTour, deleteTour, getAllTour, getFeaturedTour} from "../controllers/tourController.js";

const router = Router();

router.post("/", createTour);
router.get("/", getAllTour);
router.get("/getFeaturedTours", getFeaturedTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);

export default router;