import Car from '../models/CarModel.js';

// Get all cars and render index.ejs
export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.render('index', { cars });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Render form to create a new car
export const renderCreateCarForm = (req, res) => {
    res.render('create');
};

// Create new car
export const createCar = async (req, res) => {
    try {
        const { name, price, size } = req.body;
        const img = req.file ? req.file.filename : '';
        await Car.create({ name, price, size, img });
        res.redirect('/cars');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Render form to edit a car
export const renderEditCarForm = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            res.render('edit', { car });
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update car
export const updateCar = async (req, res) => {
    try {
        const { name, price, size } = req.body;
        const img = req.file ? req.file.filename : req.body.oldImg;
        const car = await Car.findByPk(req.params.id);
        if (car) {
            car.name = name;
            car.price = price;
            car.size = size;
            car.img = img;
            await car.save();
            res.redirect('/cars');
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete car
export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            await car.destroy();
            res.redirect('/cars');
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
