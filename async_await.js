async function showAvatar() {
  // запрашиваем JSON с данными пользователя
  const response = await fetch('./user.json');
  const user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  const githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  const githubUser = await githubResponse.json()
  
  // Отображаем аватар пользователя
  const img = document.createElement('img')
  img.src = githubUser.avatar_url
  document.body.append(img)

  // ждем 2с и закрываем
  await new Promise((resolve, reject) => setTimeout(resolve, 2000))
  img.remove()
  
  // ждем 0.5с и показываем message
  await new Promise((resolve, reject) => setTimeout(resolve, 500))
  alert(`Закончили показ ${githubUser.name} фото`)
}

showAvatar()

