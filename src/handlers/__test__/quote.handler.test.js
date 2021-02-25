const {
  createQuoteHandler,
} = require('../quote.handler');
const service = require('../../services/quote.service');
const ExistsError = require('../../errors/exists.error');

describe('createQuoteHandler', () => {
  let mockSend;
  let mockResponse;
  beforeEach(() => {
    mockSend = jest.fn();
    mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
    };
  });
  it('should return status 200 and quote data', async () => {
    const mockRequest = {
      params: {
        id: 1,
      },
    };
    const mockReturnObject = {
      id: 5,
      tags: [
        'friendship',
      ],
      length: 37,
      content: 'Friendship is Love without his wings!',
      author: 'Lord Byron',
      quoteId: '-0DZUCVFcb',
      updatedAt: '2021-02-25T10:50:02.614Z',
      createdAt: '2021-02-25T10:50:02.614Z',
    };
    jest.spyOn(service, 'createQuote').mockResolvedValue(mockReturnObject);
    await createQuoteHandler(mockRequest, mockResponse);
    expect(mockSend).toHaveBeenCalledWith(mockReturnObject);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
  it('should return status 200 and quote data', async () => {
    const mockRequest = {
      params: {
        id: 1,
      },
    };

    jest.spyOn(service, 'createQuote').mockImplementation(() => { throw new Error('error'); });
    await createQuoteHandler(mockRequest, mockResponse);
    expect(mockSend).toHaveBeenCalledWith();
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
  it('should go to catch blockand return status 404 with error message ', async () => {
    const mockRequest = {
      params: {
        id: 1,
      },
    };
    jest.spyOn(service, 'createQuote').mockImplementation(() => { throw new ExistsError('Already Exists'); });

    await createQuoteHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(409);
    expect(mockSend).toHaveBeenCalledWith('Already Exists');
  });
});
