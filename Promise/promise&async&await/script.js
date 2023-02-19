// Создаем promise
const f1 = () => {
  return new Promise((resolve, reject) => {
    resolve("Успешное выполнение promise 1");
  });
};

const f2 = new Promise((resolve, reject) => {
  resolve("Успешное выполнение promise 2");
});

// Объявляем асинхронную функцию
const usePromise = async () => {
  console.log('начало');
  
  // Дожидаемся получения результата от первой функции
  const promiseResult1 = await f1();
  console.log('promiseResult1', promiseResult1);
  
  // Дожидаемся получения результата промиса
  const promiseResult2 = await f2;
  console.log('promiseResult2', promiseResult2)
  
  console.log('конец');
};

usePromise();