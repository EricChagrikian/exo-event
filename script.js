const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let div = document.createElement('div')
  let main = document.querySelector('main')
  let section = main.children[0]
  section.appendChild(div)
  if(e.target.classList[1] === "green") {
    div.className = "displayedsquare green"
  }
  if(e.target.classList[1] === "violet") {
    div.className = "displayedsquare violet"
  }
  if(e.target.classList[1] === "orange") {
    div.className = "displayedsquare orange"
  }
}





const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}



