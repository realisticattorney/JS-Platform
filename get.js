import scoreSystem from './src/score/API.js'

scoreSystem.postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ImWeMs9BETev9fZKuGY/scores', { 
	"user": "Lolzz",
	"score": 20
})



const asyncWeather = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ImWeMs9BETev9fZKuGY/scores', {
      mode: 'cors',
    });
    const data = await response.json();
    return console.log(data)
  
  } catch (error) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.innerHTML = `${error}`;
    return errorMessage;
  }
};

asyncWeather()