const { router: healthRouter } = require('./health.router');
const { router: quoteRouter } = require('./quote.router');

module.exports = { healthRouter, quoteRouter };
