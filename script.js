const API_KEY = '1Pj3D3xLuzlgf4xeuzJk28OfHUqQwe0LksLWgJLN'
let API_DATE = '2023-02-28'
const rootElement = document.querySelector('#root')

let div1
let div2

const fetchApod = async function(url) {
  const response = await fetch(url)
  const apodData = await response.json() 
  return apodData
}

// explanation, date, eventListener - dinamikus
// statikus soha nem lesz cserélve (dátumválasztó)
const createSkeleton = function() {
  
  div1 = document.createElement('div')
  div1.classList.add('input-container')

  div2 = document.createElement('div')
  div2.classList.add('data-container')
  rootElement.append(div1, div2)
}


const createApodElement = function(parentElement, data) {
  //parentElement.innerHTML = '' (az elem önmagát fűzi hozzá) 
  const date = document.createElement('date')
  date.innerText = data.date
  div1.append(date)

  const h1 = document.createElement('h1')
  h1.innerText = data.title
  div2.append(h1)

  const explanation = document.createElement('explanation')
  explanation.innerText = data.explanation 
  div2.append(explanation)

  const img = document.createElement('img')
  img.src = data.url
  div2.append(img)

  parentElement.append(h1, explanation, img)
}

const init = async function() {
  createSkeleton()
  const inputContainer = document.querySelector('.input-container')
  const dataContainer = document.querySelector('.data-container')
  const apodData = await fetchApod(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
  console.info(apodData)
  createApodElement(dataContainer, apodData)
  console.info(div1, div2)

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