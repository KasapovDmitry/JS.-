const btnStart = document.querySelector('.j-start');
const btnEnd = document.querySelector('.j-end');

// Переменная для записи id запущенного setInterval
let ID = null;

function f1() {
  console.log('1');
};

function f2() {
  console.log('2');
};

btnStart.addEventListener('click', () => {
  f2(); // Выполняется сразу
  // Если setInterval еще не запускали, то запустим
  if (!ID) {
    ID = setInterval(f1, 1000); // Выполняется через каждую 1 секунду 
  }
  f2(); // Выполняется сразу
});

btnEnd.addEventListener('click', () => {
  // останавливаем функцию setInterval
  clearInterval(ID);
  ID = null;
});
