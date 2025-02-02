const express = require('express');
const cors = require('cors');
const numberRouter = require('./src/routes/numberRoute');

const PORT = 8000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', numberRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});