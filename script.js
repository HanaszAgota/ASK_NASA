const API_KEY = 'nJSclvl9V2lsof5b7URGHrdEVzMeMvbQ7tYpT57w'
const API_DATE = '2023-02-28'
const rootElement = document.querySelector('#root')

const fetchApod = async function(url) {
  const response = await fetch(url)
  const apodData = await response.json() 
  return apodData
}

const fetchApod2 = async function(url) {
  return fetch(url)
          .then((response) => response.json())
          //.then((apodData) => apodData)
}

const createApodElement = function(title, url) {
  const h1 = document.createElement('h1')
  h1.innerText = title

  const img = document.createElement('img')
  img.src = url

  rootElement.append(h1, img)
}

const init = async function() {
  const apodData = await fetchApod(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
  createApodElement(apodData.title, apodData.url)
}

init()

// const API_KEY = '1Pj3D3xLuzlgf4xeuzJk28OfHUqQwe0LksLWgJLN'
// const API_DATE = '2023-02-28'
// const root = document.querySelector('#root')

//   async function getFetch(url) {
//   const response = await fetch(url)
//   const apodData = await response.json() 
  
//   return apodData
// }
// console.log(
//   getFetch(
//     `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`
//   )
// )

// async function fetch2(url) {
//   return fetch(url)
//     .then((response) => response.json())
//   //.then((apodData) => apodData)
// }

//   function getElements() {
//     let a = async function() {
//     const response = await fetch2 (
//       `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`
//     )

//   const h1 = document.createElement('h1')
//   h1.innerText = title

//   const p = document.createElement ('p')

//   const img = document.createElement('img')
//   img.src = url

//   root.append(h1, p, img)
//   a()
//   }
// }
// getElements()

// // const init = async function() {
// //   const apodData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
// //   createElement(h1.title, img.url, p)
// // }

// // init()