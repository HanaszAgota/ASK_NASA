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