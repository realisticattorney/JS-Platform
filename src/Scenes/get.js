const asyncWeather = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ImWeMs9BETev9fZKuGY/scores', {
      mode: 'cors',
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
};


export default asyncWeather;
