const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Настраиваем наш запрос
  const options = {
    // Будем использовать метод POST
    method: 'POST',
    // Добавим тело запроса
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    // Дополнительный заголовое с описанием типа данных,
    // которые мы отправляем серверу. В данном случае
    // сервер jsonplaceholder будет знать, как ему
    // обрабатывать запрос
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  // Делаем запрос за данными
  fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(response => response.json())
    .then(json => console.log(json))
});
