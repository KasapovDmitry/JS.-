const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Делаем запрос за данными
  fetch('https://picsum.photos/v2/list/?limit=5')
    .then((response) => {
      // Объект ответа на запрос
      console.log('response', response);
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();
      console.log('result', result);
      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON
      console.log(data);
    })
    .catch(() => { console.log('error') });
});

