const API_KEY = '1Pj3D3xLuzlgf4xeuzJk28OfHUqQwe0LksLWgJLN'
let API_DATE = '2023-02-28'
const rootElement = document.querySelector('#root')

const fetchApod = async function(url) {
  const response = await fetch(url)
  const apodData = await response.json() 
  return apodData
}

// explanation, date, eventListener - dinamikus
// statikus soha nem lesz cserélve (dátumválasztó)
const createSkeleton = function() {
  
  const div1 = document.createElement('div')
  div1.classList.add('input-container')

  const div2 = document.createElement('div')
  div2.classList.add('data-container')
  rootElement.append(div1, div2)
}


const createApodElement = function(parentElement, data) {
  //parentElement.innerHTML = '' (az elem önmagát fűzi hozzá) 
  const date = document.createElement('date')
  date.innerText = data.date
  date.append(div1)

  const div2 = document.createElement('div')
  div2.classList.add('data-container')

  const h1 = document.createElement('h1')
  h1.innerText = data.title
  h1.append(div2)

  const explanation = document.createElement('explanation')
  explanation.innerText = data.explanation 
  explanation.append(div2)

  const img = document.createElement('img')
  img.src = data.url
  img.append(div2)

  parentElement.append(date, explanation, h1, img)
}

const init = async function() {
  createSkeleton()
  const inputContainer = document.querySelector('.input-container')
  const dataContainer = document.querySelector('.data-container')
  const apodData = await fetchApod(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
  console.log(apodData)
  createApodElement(dataContainer, apodData)
  
}

init()

// function createDog (name, age, color) { 
//   // const dog = 'morzsa'
//   // const age = 2
//   const h2 = document.createElement('h2')
//   h2.classList.add('dog')
//   h2.innerText = `${name}, age: ${age}, color: ${color}`
//   rootElement.append(h2)

// }
// createDog('Artúr', 1, 'barna')

// createDog('Süti', 4, 'fehér')