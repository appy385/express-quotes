const { Quote } = require('../models');
const ExistsError = require('../errors/exists.error');
const { fetchData } = require('../utils/fetch.utils');

const createQuote = async (qid) => {
  // eslint-disable-next-line no-useless-catch
  try {
    let quote = await Quote.findOne({ where: { quoteId: qid } });
    if (quote !== null) {
      throw new ExistsError(`Already exists with quote id: ${quote.quoteId}`);
    }
    quote = await fetchData(qid);
    console.log(quote);

    quote = await Quote.create({
      tags: quote.tags,
      length: quote.length,
      content: quote.content,
      author: quote.author,
      quoteId: quote._id,
    });
    return quote.dataValues;
  } catch (error) {
    throw error;
  }
};

const getAllQuotes = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await Quote.findAll();
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = { createQuote, getAllQuotes };
