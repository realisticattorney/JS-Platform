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

export default APIgetter;
