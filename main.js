const userSocialMedias = {
  github: 'jspagrow',
  facebook: 'jonas.sousa.7146',
  instagram: 'jonas.jsw',
  youtube: 'channel/UCax8zRTGrLqJGhLsHXBQlJQ',
  twitter: 'jonas100'
}

function changeSocialMediaLinks() {
  for (let li of socialMediaLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMedias[social]}`
  }
}

function getGitHubInfo() {
  const url = `https://api.github.com/users/${userSocialMedias.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      gitUser.href = data.html_url
      gitUser.children[1].textContent = userSocialMedias.github
      userAvatar.src = data.avatar_url
    })
}

changeSocialMediaLinks()
getGitHubInfo()
