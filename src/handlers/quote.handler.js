const service = require('../services/quote.service');
const ExistsError = require('../errors/exists.error');

const createQuoteHandler = async (req, res) => {
  try {
    const { params } = req;
    const response = await service.createQuote(params.id);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof ExistsError) {
      res.status(409).send(error.message);
    }
    res.status(500).send();
  }
};

module.exports = { createQuoteHandler };
