// запрашиваем user.json
fetch('./user.json')
  // Загружаем данные в формате json
  .then(responce => responce.json())
  // делаем запрос к github с именем user из полученных данных
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Загружаем данные в формате json
  .then(responce => responce.json())
  // Показываем аватар (githubUser.avatar_url) в течении нескольких сек 
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    document.body.append(img)

    // если хотим добавить какие-то действия после показа аватара
    // мы должны возвращать промис в этой функции

    setTimeout(() => {
      img.remove()
      setTimeout(() => resolve(githubUser), 500)
    }, 2000)
  }))
  // срабатывает после показа img
  .then(githubUser => alert(`Закончили показ ${githubUser.name} фото`))