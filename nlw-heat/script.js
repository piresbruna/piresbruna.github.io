const socialMediaIDs = {
  github: 'piresbruna',
  youtube: '', //duolingo no lugar?
  instagram: 'bruna.pires93',
  facebook: 'pires.bruna93',
  twitter: 'BrunaS_Pires'
}

function changeSocilaMediaLinks() {
  for (let li of socialMediaLinks.children) {
    const socialMediaName = li.getAttribute('class')

    li.children[0].href = `https://${socialMediaName}.com/${socialMediaIDs[socialMediaName]}`
  }
}

changeSocilaMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${socialMediaIDs.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userAccount.textContent = data.login
      userPicture.src = data.avatar_url
      userBio.textContent = data.bio
      userLink.href = data.html_url
    })
}

getGitHubProfileInfo()
