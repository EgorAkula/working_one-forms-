// Объявление переменных
const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector('#name');
const list = document.querySelector('#list');

// Обработчик события кнопки
myBtn.addEventListener('click', () => {
    // создание элемента li
    const newItem = document.createElement('li');
    // Добавить элементу класс
    newItem.classList.add('item');
    // Добавить элементу текстовое содержимое из поля ввода
    newItem.textContent = nameInput.value
    // Добавить элемент в список
    list.appendChild(newItem);

    // очистить поле ввода
    nameInput.value = "";
})