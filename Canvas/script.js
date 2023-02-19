// Рисуем прямоугольники
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

ctx1.fillStyle = "gray";
ctx1.fillRect(0, 0, 300, 300);

// Обычный прямоугольник
ctx1.strokeStyle = "yellow";
ctx1.strokeRect(10, 20, 30, 40);

// Залитый прямоугольник
ctx1.fillStyle = "green";
ctx1.fillRect(70, 10, 50, 50);


// Работа с контуром
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

ctx2.beginPath(); // Создает новый контур
ctx2.moveTo(75,50); // Перемещает перо в точку с координатами x и y.
ctx2.lineTo(100,75); // Рисует линию с текущей позиции до позиции, определенной x и y.
ctx2.lineTo(100,25);
ctx2.fillStyle = "green"; // Заливаем выбранным цветом фигуру
ctx2.fill(); // Рисует фигуру с заливкой внутренней области.




