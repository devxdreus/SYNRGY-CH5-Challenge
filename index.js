import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './config/Database.js';
import carRoute from './routes/CarRoute.js';
import methodOverride from 'method-override';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Setting EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/cars', carRoute);

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
