const fetch = require('node-fetch');
// const { Json } = require('sequelize/types/lib/utils');
const { fetchData } = require('../fetch.utils');

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch');
describe('fetchData', () => {
  it('should return quotes data ', async () => {
    const mockID = '-0DZUCVFcb';
    const response = JSON.stringify({
      tags: [
        'friendship',
      ],
      length: 37,
      content: 'Friendship is Love without his wings!',
      author: 'Lord Byron',
      quoteId: '-0DZUCVFcb',
      updatedAt: '2021-02-25T10:50:02.614Z',
      createdAt: '2021-02-25T10:50:02.614Z',
    });
    fetch.mockReturnValueOnce(Promise.resolve(new Response(response)));
    const result = await fetchData();
    expect(result).toEqual(JSON.parse(response));
  });
});
