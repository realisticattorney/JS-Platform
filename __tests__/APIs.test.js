import APIgetter from '../src/score/APIgetter';

test('get top ten records from APIgetter service', () => {
  APIgetter()
    .then((result) => {
      expect(result.data.result.length).toBeGreaterThan(0);
    });
});

test('should not get an string from  APIgetter service', () => {
  APIgetter()
    .then((result) => {
      expect(result.data.result).not.toAnInstanceOf(String);
    });
});

test('APIgetter should return an array', () => {
  APIgetter()
    .then((result) => {
      expect(result.data.result[0]).toEqual(expect.objectContaining({
        score: expect.any(Number),
        user: expect.any(String),
      }));
    });
});

test('APIgetter should not bring score in ascending order', () => {
  APIgetter()
    .then((response) => {
      const expected = expect.arrayContaining(response.sort((a, b) => a.score - b.score));
      expect(response).not.toEqual(expected);
    });
});
