class ExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ExistsError';
  }
}

module.exports = ExistsError;
