import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        const savedTour = await newTour.save();
        res.status(201).json(savedTour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getSingleTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) return res.status(404).json({ message: 'Tour not found' });
        res.status(200).json(tour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tour) return res.status(404).json({ message: 'Tour not found' });
        res.status(200).json(tour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) return res.status(404).json({ message: 'Tour not found' });
        res.status(200).json({ message: 'Tour deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getAllTour = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
