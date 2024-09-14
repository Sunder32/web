// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const checkbox = document.getElementById('checkbox');
    const modal = document.getElementById("modal");
    
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        modal.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        modal.classList.remove('dark-mode');
    }
}

// Функция для показа модального окна с плавной анимацией
function showDetails(device) {
    const modal = document.getElementById("modal");
    const contentContainer = document.getElementById("modal-content-container");
    const body = document.body;

    // Очищаем контейнер перед добавлением нового контента
    contentContainer.innerHTML = "";

    let content = "";
    switch (device) {
        case 'smartphone':
            content = `<h2>Смартфоны</h2>
                <img src="img/telephone.png" alt="Смартфон" class="gadget-image">
                <p>Смартфоны - это многофункциональные устройства, объединяющие телефон, камеру и компьютер в одном.</p>
                  <ul>
                    <li>Камера с высоким разрешением</li>
                    <li>Большой экран с высокой яркостью</li>
                    <li>Производительные процессоры</li>
                  </ul>`;
            break;
        case 'laptop':
            content = `<h2>Ноутбуки</h2>
                <img src="img/laptop.png" alt="Ноутбук" class="gadget-image">
                <p>Ноутбуки сочетают высокую производительность с мобильностью. Идеальны для работы и учебы.</p>
                 <ul>
                    <li>Производительные процессоры</li>
                    <li>Высококачественные экраны</li>
                    <li>Легкость и компактность</li>
                </ul>`;
            break;
        case 'gadget':
            content = `<h2>Гаджеты</h2>
                <img src="img/gadget.png" alt="Гаджеты" class="gadget-image">
                <p>Гаджеты делают нашу жизнь проще и удобнее. Включают умные часы, фитнес-браслеты и многое другое.</p> <ul>
                    <li>Apple Watch Series 8</li>
                    <li>Fitbit Versa 4</li>
                    <li>Xiaomi Mi Band 7</li>
                </ul`;
            break;
        case 'console':
            content = `<h2>Игровые приставки</h2>
                <img src="img/console.png" alt="Игровая приставка" class="gadget-image">
                <p>Игровые приставки предлагают увлекательный игровой опыт с невероятной графикой и множеством игр для любого возраста.</p> <ul>
                    <li>PlayStation 5</li>
                    <li>Xbox Series X</li>
                    <li>Nintendo Switch</li>
                </ul>`;
            break;
        default:
            content = `<p>Не удалось загрузить информацию.</p>`;
            break;
    }

    contentContainer.innerHTML = content;
    
    // Синхронизация темы модального окна с текущей темой
    if (body.classList.contains('dark-mode')) {
        modal.classList.add('dark-mode');
    } else {
        modal.classList.remove('dark-mode');
    }
    
    modal.classList.add("show");
}

// Функция для закрытия модального окна
function closeModal(event) {
    const modal = document.getElementById("modal");
    
    if (event.target === modal || event.target.classList.contains("close")) {
        modal.classList.remove("show");
    }
}

// Добавление слушателей событий для кнопок
document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', function() {
        showDetails(this.dataset.device);
    });
});

// Добавление слушателя событий для закрытия модального окна
document.getElementById("modal").addEventListener('click', closeModal);

// Добавление слушателя событий для переключателя темы
document.getElementById('checkbox').addEventListener('change', toggleTheme);

// Инициализация темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    toggleTheme(); // Применяем начальную тему
});