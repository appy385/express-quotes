const express = require('express');
const { createQuoteHandler } = require('../handlers/quote.handler');

const router = express.Router();
router.put('/:id', createQuoteHandler);
module.exports = { router };
