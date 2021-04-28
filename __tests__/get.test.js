import asyncWeather from '../src/Scenes/get';

test('get top ten records from asyncWeather service', () => {
  asyncWeather()
    .then((result) => {
      expect(result.data.result.length).toBeGreaterThan(0);
    });
});

test('should not get an string from  asyncWeather service', () => {
  asyncWeather()
    .then((result) => {
      expect(result.data.result).not.toAnInstanceOf(String);
    });
});

test('asyncWeather should return an array', () => {
  asyncWeather()
    .then((result) => {
      expect(result.data.result[0]).toEqual(expect.objectContaining({
        score: expect.any(Number),
        user: expect.any(String),
      }));
    });
});

test('asyncWeather should not bring score in ascending order', () => {
  asyncWeather()
    .then((response) => {
      const expected = expect.arrayContaining(response.sort((a, b) => a.score - b.score));
      expect(response).not.toEqual(expected);
    });
});
