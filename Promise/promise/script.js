// Флаг вызова resolve или reject. Можно переключать
// для изменения результата
let flag = false;

// Создаем promise
const myPromise = new Promise((resolve, reject) => {
  if (flag) {
    resolve("Успешное выполнение promise");
  } else {
    reject("Неуспешное выполнение promise");
  }
});

// Выполняем promise
myPromise
  .then((result) => {
    console.log('Обрабатываем resolve', result);
  })
  .catch((error) => {
    console.log('Обрабатываем reject', error);
  })
  .finally(() => {
    console.log('Выполняется всегда');
  });