const button = document.getElementById("search-button")
const input = document.getElementById("city-input")
const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getdata(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=f28c272207ab43a2b67123211242912&q=${cityName}&aqi=yes`);
    return await promise.json()
}
button.addEventListener("click", async () => {
const value = input.value;
const result = await getdata(value);
cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
cityTime.innerText = result.location.localtime;
cityTemp.innerText = result.current.temp_c;
});

//https://api.weatherapi.com/v1/current.json?key=f28c272207ab43a2b67123211242912&q=London&aqi=yes