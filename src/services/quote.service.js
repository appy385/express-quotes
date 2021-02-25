const fetch = require('node-fetch');
const { Quote } = require('../models');
const ExistsError = require('../errors/exists.error');

function fetchData(id) {
  return fetch(`https://api.quotable.io/quotes/${id}`)
    .then((response) => response.json())
    .then((data) => (data));
}

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

module.exports = { createQuote };
