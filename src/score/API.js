async function scoreSystem(url , data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  const datata = await response.json();
  return {
    datata
  }
}

export default scoreSystem
// scoreSystem.postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ImWeMs9BETev9fZKuGY/scores', { 
// 	"user": "Lolzz",
// 	"score": 20
// })
