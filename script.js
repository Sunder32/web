// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    
    // Проверка, если у body есть класс dark-mode
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Загружаем тему при загрузке страницы
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Функция для показа модального окна с плавной анимацией
function showDetails(device) {
    const modal = document.getElementById("modal");
    const contentContainer = document.getElementById("modal-content-container");

    // Очищаем контейнер перед добавлением нового контента
    contentContainer.innerHTML = "";

    // Контент для разных устройств
    let content = "";
    switch (device) {
        case 'smartphone':
            content = `
                <h2>Смартфоны</h2>
                <img src="img/telephone.png" alt="Смартфон" class="gadget-image">
                <p>Смартфоны - это многофункциональные устройства, объединяющие телефон, камеру и компьютер в одном.</p>
                <ul>
                    <li>Камера с высоким разрешением</li>
                    <li>Большой экран с высокой яркостью</li>
                    <li>Производительные процессоры</li>
                </ul>`;
            break;
        case 'laptop':
            content = `
                <h2>Ноутбуки</h2>
                <img src="img/laptop.png" alt="Ноутбук" class="gadget-image">
                <p>Ноутбуки сочетают высокую производительность с мобильностью. Идеальны для работы и учебы.</p>
                <ul>
                    <li>Производительные процессоры</li>
                    <li>Высококачественные экраны</li>
                    <li>Легкость и компактность</li>
                </ul>`;
            break;
        case 'gadget':
            content = `
                <h2>Гаджеты</h2>
                <img src="img/gadget.png" alt="Гаджеты" class="gadget-image">
                <p>Гаджеты делают нашу жизнь проще и удобнее. Они включают умные часы, фитнес-браслеты и многое другое.</p>
                <ul>
                    <li>Apple Watch Series 8</li>
                    <li>Fitbit Versa 4</li>
                    <li>Xiaomi Mi Band 7</li>
                </ul>`;
            break;
        case 'console':
            content = `
                <h2>Игровые приставки</h2>
                <img src="img/console.png" alt="Игровая приставка" class="gadget-image">
                <p>Игровые приставки предлагают увлекательный игровой опыт с невероятной графикой и множеством игр для любого возраста.</p>
                <ul>
                    <li>PlayStation 5</li>
                    <li>Xbox Series X</li>
                    <li>Nintendo Switch</li>
                </ul>`;
            break;
        default:
            content = `<p>Не удалось загрузить информацию.</p>`;
            break;
    }

    // Добавляем контент в контейнер
    contentContainer.innerHTML = content;

    // Показываем модальное окно
    modal.classList.add("show");
}

// Функция для закрытия модального окна
function closeModal(event) {
    const modal = document.getElementById("modal");
    
    // Закрываем модальное окно при клике за его пределами или по кнопке закрытия
    if (event.target === modal || event.target.classList.contains("close")) {
        modal.classList.remove("show");
    }
}

// Добавление слушателя событий для кнопки переключения темы
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Добавление слушателя событий для закрытия модального окна
document.querySelector('.modal').addEventListener('click', closeModal);

// Загружаем тему при загрузке
document.addEventListener('DOMContentLoaded', loadTheme);
