// 1. Создайте элементы с разными идентификаторами, один из которых main.
// Найти элемент с идентификатором main и записать в него текст “Я главный элемент”.
document.querySelector('#main').textContent = 'Я главный элемент'

// 2.Написать скрипт, который находит картинки в блоке с классом main 
// и первым 5 картинкам меняет url на указанное значение.
const picturesBlock = document.querySelector('.main-container')
const newURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqKD2gmnRY4sHjwHaDWBG05mfbHz53yvscQ&s'
if (picturesBlock) {
  const pictures = picturesBlock.querySelectorAll('.item')
  for (let i = 0; i < Math.min(5, pictures.length); i++) { // условие цикла написал не сам
    pictures[i].src = newURL
  }
}