const {
  healthHandler,
} = require('../health.handler');

describe('Health Handler', () => {
  it('should return status 200', () => {
    const mockSend = jest.fn();
    const mockResponse = {
      status: jest.fn(() => ({
        send: mockSend,
      })),
    };
    healthHandler(null, mockResponse);
    expect(mockSend).toHaveBeenCalledWith('Server is up');
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
});
