const btn = document.querySelector('.j-btn');

// Функция, которая возвращаем fetch
const useRequest = () => {
  return fetch('https://picsum.photos/v2/list/?limit=5')
    .then((response) => {
      console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
  console.log('start');
  
  const requestResult = await useRequest();
  console.log('requestResult', requestResult);
  
  console.log('end');
});



