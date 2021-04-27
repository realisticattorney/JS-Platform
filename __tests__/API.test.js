import scoreSystem from '../src/score/API';
import 'regenerator-runtime';

beforeEach(() => {
  fetch.resetMocks();
});

it('Return score', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'John Doe',
        score: 42,
      }],
  }));
  const res = await scoreSystem();
  expect(res[0].score).toEqual(42);
  expect(fetch.mock.calls.length).toEqual(1);
});

it('Return name', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'John Doe',
        score: 42,
      }],
  }));
  const res = await scoreSystem();
  expect(res[0].user).toEqual('John Doe');
  expect(fetch.mock.calls.length).toEqual(1);
});

it('fails due to incorrect score', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'John Doe',
        score: 42,
      }],
  }));
  const res = await scoreSystem();
  expect(res[0].score).not.toEqual(13);
  expect(fetch.mock.calls.length).toEqual(1);
});
it('fails due to incorrect username', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'John Doe',
        score: 42,
      }],
  }));
  const res = await scoreSystem();
  expect(res[0].user).not.toEqual('Evil Glitch');
  expect(fetch.mock.calls.length).toEqual(1);
});