fetch('./user.json')
  .then(responce => responce.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(responce => responce.json())
  .then(githubUser => {
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    document.body.append(img)

    setTimeout(() => img.remove(), 2000)
  })