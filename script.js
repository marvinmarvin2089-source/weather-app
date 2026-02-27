const apiKey = "e3d4df6df382827f4b1f62033c2046d6"

const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")

const cityName = document.getElementById("cityName")
const temperature = document.getElementById("temperature")
const description = document.getElementById("description")
const weatherIcon = document.getElementById("weatherIcon")

async function getWeather(){

const city = cityInput.value

if(city === ""){
alert("Digite uma cidade")
return
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`

const response = await fetch(url)

const data = await response.json()

cityName.innerText = data.name

temperature.innerText = Math.round(data.main.temp) + "°C"

description.innerText = data.weather[0].description

const icon = data.weather[0].icon

weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

}

searchBtn.addEventListener("click", getWeather)