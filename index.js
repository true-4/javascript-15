// 1. Создайте элементы с разными идентификаторами, один из которых main.
// Найти элемент с идентификатором main и записать в него текст “Я главный элемент”.
document.querySelector('#main').textContent = 'Я главный элемент'

// 2-3.Написать скрипт, который находит картинки в блоке с классом main 
// и первым 5 картинкам меняет url на указанное значение.
const picturesBlock = document.querySelector('.main-container')
const newURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqKD2gmnRY4sHjwHaDWBG05mfbHz53yvscQ&s'
if (picturesBlock) {
  const pictures = picturesBlock.querySelectorAll('.item')
  for (let i = 0; i < Math.min(5, pictures.length); i++) { // условие цикла написал не сам
    pictures[i].src = newURL
  }
}

// 4. Написать скрипт, который находит все ссылки на странице 
// и формирует массив со всеми адресами. 
// В итоге этот массив необходимо вывести в консоль.

const selectLinks = document.querySelectorAll('a')
const arr = Array.from(selectLinks).map(link => link.href)
console.log(arr)

// 5. Создать множество параграфов с числами от 0 до 19.
// Написать цикл, который проходится по массиву строк 
// и для каждого создает параграф и добавляет в #root

const root = document.querySelector('#root')
for (let i = 1; i < 21; i++) {
  const p = document.createElement('p')
  p.textContent = i
  root.appendChild(p)
}

// 6. Написать программу, которая запрашивает у пользователя картинку 
// и ссылку на статью (любую) и формирует в интерфейсе картинку 
// и внизу ссылку, указанную пользователем.
// (для запроса используем браузерные технологии модальных окон)
// Картинка https://nedmotorsport.com/images/stories/bmw%20e46%20m3%20gtr%201.jpg
// Статья https://nedmotorsport.com/stati/394-bmw-m3-e46-gtr-nedmotorsport


// const imageURL = prompt('Вставте ссылку на картинку: ')
// const articleURL = prompt('Вставте ссылку на статью: ')

// if (imageURL && articleURL) {
//   const container = document.querySelector('#user-content')

//   const img = document.createElement('img')
//   img.src = imageURL
//   img.style.maxHeight = '300px'

//   const link = document.createElement('a')
//   link.href = articleURL
//   link.textContent = 'Прочитать статью'

//   container.appendChild(img)
//   container.appendChild(link)
// }

// 7. Написать цикл, который создает множество параграфов с каждым десятым числом
// в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.

const numbers = document.querySelector('.numbers')
for (let i = 100; i >= 50; i -= 10) {
  const p = document.createElement('p')
  p.textContent = i
  numbers.appendChild(p)
}

// 8. Написать цикл, который проходится по массиву строк, 
// для каждой строки создает параграф 
// и добавляет его в div с классом strings_container. 
// Строки взять произвольные.

const animals = ['Dog', 'Cat', 'Wolf', 'Fox', 'Fish']
const string = document.querySelector('.string-container')

for (const el of animals) {
  const p = document.createElement('p')
  p.textContent = el
  string.appendChild(p)
}