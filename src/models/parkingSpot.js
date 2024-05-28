import mongoose from 'mongoose';

const ParkingSpotSchema = new mongoose.Schema({
    location: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    pricePerHour: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

const ParkingSpot = mongoose.models.ParkingSpot || mongoose.model('ParkingSpot', ParkingSpotSchema);

export default ParkingSpot;