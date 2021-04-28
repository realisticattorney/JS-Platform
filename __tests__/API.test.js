import scoreSystem from '../src/score/API';
import APIgetter from '../src/score/APIgetter';
import 'regenerator-runtime';

jest.mock('../__mocks__/resquests.js');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/riKIWrWievm0U8kNlI8w/scores';

beforeEach(() => {
  fetch.resetMocks();
});

test('saves the score and username to the leaderBoard', () => {
  scoreSystem(url, 100)
    .then((score) => expect(score)
      .toEqual({ result: 'Leaderboard score created correctly.' }));
});

test('get score and username in descending order from the leaderBoard', () => {
  APIgetter().then((scores) => expect(typeof scores).toEqual('object'));
});

test('ranking contains the user', () => {
  APIgetter().then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: 100,
          user: 'john doe',
        }),
      ]),
    );
  }).catch(() => { });
});

test('Return score', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'john doe',
        score: 100,
      }],
  }));
  const res = await APIgetter();
  expect(res.data.result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        score: 100,
        user: 'john doe',
      }),
    ]),
  );
});
