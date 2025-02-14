import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        });

        res.status(201).json({ success: true, data: savedReview , message:"Review submitted" }); // Send a response back to the client
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to submit" }); // Handle errors and send a response
    }
};