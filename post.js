async function postData(url , data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  const datata = await response.json();
  console.log(datata)
}

