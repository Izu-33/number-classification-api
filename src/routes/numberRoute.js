const express = require('express');
const { } = require('../controllers/numberController');

const numberRouter = express.Router();

numberRouter.get('/classify-number', getProps);

module.exports = numberRouter;