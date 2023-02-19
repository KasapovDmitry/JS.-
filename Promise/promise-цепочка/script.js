// Стартовое значение
// Если startValue >= 2 - все пройдет успешно
// Если startValue === 1 - все начнется хорошо, но на 3ем then будет ошибка
// Если startValue === 0 - сразу будет ошибка
const startValue = 2;

// Создаем promise
const myPromise = new Promise((resolve, reject) => {
  if (startValue) {
    resolve({
      message: "Успешное выполнение promise",
      data: startValue,
    });
  } else {
    reject({
      message: "Неуспешное выполнение promise в самом начале"
    });
  }
});

// Выполняем promise
myPromise
  // then №1
  .then((result) => {
    console.log('Обрабатываем resolve', result.message);
    return result.data;
  })
  // then №2
  .then((data) => {
    console.log('Получаем данные из then №2', data);
    return data * 2;
  })
  // then №3, возвращающий новый промис
  .then((data) => {
    console.log('Мы можем создать новый промис', data);
    return new Promise((resolve, reject) => {
      if (data > 3) {
        resolve(data + 10);
      } else {
        reject({
          message: "Неуспешное выполнение promise на then №3"
        });
      }
    });
  })
  // catch для обработки ошибки
  .catch((error) => {
    console.log('Обрабатываем reject', error.message);
    // При ошибке возвращаем начальный результат
    return startValue;
  })
  // Завершающий then
  // Выполнится после then №3, если все прошло успешно
  // или после catch, если была ошибка
  .then((data) => {
    console.log('Итоговый результат', data);
  });