// Внимательно посмотрите за очередностью выводимых в консоль данных

// Функция выполнения promise
function usePromise() {
  // Создаем promise
  const myPromise = new Promise((resolve, reject) => {
    console.log('1');
    setTimeout(() => {
      console.log('2');
      resolve("Успешное выполнение promise");
    }, 1000);
    console.log('3');
  });

  console.log('4');
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
  
  console.log('5');
};

console.log('Запускаем функцию с promise');
usePromise();
console.log('Функция выполнилась');

// ВЫВОД:
// Запускаем функцию с promise
// 1
// 3
// 4
// 5
// Финкция выполнилась
// 2
// Обрабатываем resolve Успешное выполнение promise
// Выполняется всегда

