const fs = require('fs')
const path = require('path')
const renderer = require('./renderer.js')

var current = null

var openPage = (pageName = "inbox") => {
  if (pageName == current) {
    return
  }

  current = pageName

  fs.readFile(path.join(__dirname, 'pages/' + pageName + '.html'), (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    document.getElementById('content').innerHTML = data
    renderer.initPage()
  })
}

// default to email page.
openPage("inbox")

let navString = ""
let navLinks = [
  'inbox', 'slack', 'pulse', 'talon', 'purchase', 'github', 'twitter'
]

for (let i = 0; i < navLinks.length; i++) {
  navString += '<img id="nav-' + navLinks[i] + '" class="nav-item" src="resources/images/' + navLinks[i] + '.png">'
}

document.getElementById('sidebar').innerHTML = navString

for (let i = 0; i < navLinks.length; i++) {
  let element = document.getElementById('nav-' + navLinks[i])
  element.addEventListener("click", () => { openPage(navLinks[i]) })
}
