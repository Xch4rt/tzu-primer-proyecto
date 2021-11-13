require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

const userRoutes = require('./src/routes/user');

app.get('/', (req, res) => {
  res.send('Tzuzul Bootcap - API!')
});

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

// Routes
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Listening at port: ${port}`)
});