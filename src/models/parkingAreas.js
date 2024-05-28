import mongoose from 'mongoose';

const ParkingAreaSchema = new mongoose.Schema({
    name: {type: String, required: true, unique:true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true }
});

const ParkingArea = mongoose.models.ParkingArea || mongoose.model('ParkingArea', ParkingAreaSchema);

export default ParkingArea;
