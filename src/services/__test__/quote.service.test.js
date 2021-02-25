const service = require('../quote.service');
const { Quote } = require('../../models');

describe('getAllQuotes Service', () => {
  it('should return todos object array', async () => {
    const mockReturnObject = [{
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
    },
    {
      id: 7,
      tags: [
        'friendship',
      ],
      length: 37,
      content: 'Friendship is Love!',
      author: 'Lord Byron',
      quoteId: '-0DCVFcb',
      updatedAt: '2021-02-25T10:50:02.614Z',
      createdAt: '2021-02-25T10:50:02.614Z',
    },
    ];
    jest.spyOn(Quote, 'findAll').mockResolvedValue(mockReturnObject);
    const receivedTasks = await service.getAllQuotes();
    expect(receivedTasks).toEqual(mockReturnObject);
  });

  it('should go to catch block ', async () => {
    jest.spyOn(Quote, 'findAll').mockImplementation(() => { throw new Error('error'); });
    try {
      const receivedTasks = await service.getAllQuotes();
    } catch (error) {
      expect(error).toEqual(Error('error'));
    }
  });
});
