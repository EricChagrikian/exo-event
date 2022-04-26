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
    let li = document.createElement('li')
    let ul = document.querySelector('ul')
    ul.appendChild(li)
    li.innerText = getElapsedTime() + ' Created a new green square'
  }
  if(e.target.classList[1] === "violet") {
    div.className = "displayedsquare violet"
    let li = document.createElement('li')
    let ul = document.querySelector('ul')
    ul.appendChild(li)
    li.innerText = getElapsedTime() + ' Created a new violet square'
  }
  if(e.target.classList[1] === "orange") {
    div.className = "displayedsquare orange"
    let li = document.createElement('li')
    let ul = document.querySelector('ul')
    ul.appendChild(li)
    li.innerText = getElapsedTime() + ' Created a new orange square'
  }


}





const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||        
      e.key == 32        
  ) {
    function randbg() {
      let r = getRandomNumber(255);
      let g = getRandomNumber(255);
      let b = getRandomNumber(255);
      let randomcolors = "rgb(" + r + "," + g + "," + b 
      + ")";
      let li = document.createElement('li')
      let ul = document.querySelector('ul')
      ul.appendChild(li)
      li.innerText = getElapsedTime() + ' Changed background color'
      return randomcolors
  }
  document.body.style.backgroundColor = randbg(); 
  }
}


document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "KeyL" ||        
      e.key == "l"        
  ) {
    let ul = document.createElement('ul')
    ul.innerHTML = ''
    console.log("key press")
  }
}