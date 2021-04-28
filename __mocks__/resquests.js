const fetch = require('node-fetch');

const scoreSystem = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const datata = await response.json();
  return {
    datata
  };
};


const APIgetter = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/riKIWrWievm0U8kNlI8w/scores', {
      mode: 'cors',
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    return error;
  }
};

export { APIgetter , scoreSystem };