import express, { Router } from "express";
import { createTour, getSingleTour, updateTour, deleteTour, getAllTour } from "../controllers/tourController.js";

const router = Router();

router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);

export default router;