const express = require('express');
const { createQuoteHandler, getAllQuotesHandler } = require('../handlers/quote.handler');

const router = express.Router();
router.put('/:id', createQuoteHandler);
router.get('', getAllQuotesHandler);
module.exports = { router };
