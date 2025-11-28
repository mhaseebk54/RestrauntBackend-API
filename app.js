const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config();

const connectdb = require('./config/db');
connectdb();

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.status(200).send("Server Started")
});

app.use("/api/auth",require('./routes/authroute'));
app.use("/api/user",require('./routes/userroutes'));
app.use("/api/category",require('./routes/categoryroute'));
app.use("/api/restraunt",require('./routes/restrauntroute'));
app.use("/api/food",require('./routes/foodroute'));
app.use("/api/order",require('./routes/orderroute'));

const PORT = process.env.PORT ||5000; 

app.listen(PORT, () => {
    console.log(`Server is running  port ${PORT}`);
});