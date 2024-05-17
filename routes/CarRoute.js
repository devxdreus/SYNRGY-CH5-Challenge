import express from 'express';
import {
    getAllCars,
    renderCreateCarForm,
    createCar,
    renderEditCarForm,
    updateCar,
    deleteCar,
} from '../controllers/CarController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'public/uploads/' });

// Routes
router.get('/', getAllCars);
router.get('/create', renderCreateCarForm);
router.post('/', upload.single('img'), createCar);
router.get('/edit/:id', renderEditCarForm);
router.post('/:id', upload.single('img'), updateCar);
router.get('/delete/:id', deleteCar);

export default router;
