const searchButton = document.querySelector('.btn-search');
const cityInput = document.querySelector('.city-input');
const locationBtn = document.querySelector('.btn-location');
const dataListDiv = document.querySelector('.data-cards');
const currentDiv = document.querySelector('.data-current');

const API_KEY = "b52a60d4522317f78442b4524d7b8f53";

const createCard = (cityName, weatherItem, index) => {

    if(index === 0){
        return `  <div class="data-details">
                        <h2>${cityName}(${weatherItem.dt_txt.split(" ")[0]})</h2>
                        <h4>Température: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
                         <h4>Vent: ${weatherItem.wind.speed}  M/S</h4>
                        <h4>Humidité: ${weatherItem.main.humidity}%</h4>
                     </div>
                <div class="data-icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="data-img">
                     <h4>${weatherItem.weather[0].description}</h4>
                    </div>`;
    }else {

        return `<li class="data-card">
            <h2>(${weatherItem.dt_txt.split(" ")[0]})</h2>
            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="data-img">
            <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
            <h4>Vent: ${weatherItem.wind.speed} M/S</h4>
            <h4>Humidité: ${weatherItem.main.humidity}%</h4>
        </li>`;
    }
}

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(WEATHER_API)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const uniqueForecast = [];
            const fiveDaysForecast = data.list.filter(forecast => {
                const forecastData = new Date(forecast.dt_txt).getDate();

                if (!uniqueForecast.includes(forecastData)) {
                    return uniqueForecast.push(forecastData);
                }
            });


            cityInput.value = "";
            dataListDiv.innerHTML = "";
            currentDiv.innerHTML = "";

            console.log(fiveDaysForecast);

            fiveDaysForecast.forEach((weatherItem, index) => {

                if(index === 0){

                    currentDiv .insertAdjacentHTML("beforeend", createCard(cityName, weatherItem, index));

                }else {

                    dataListDiv.insertAdjacentHTML("beforeend", createCard(cityName, weatherItem, index));
                }
            });

        })
        .catch(() => {
            alert('Il y a eu une erreur, réessayer plus tard !');
        });
};

const getCityData = () => {
    const cityName = cityInput.value.trim();

    if (!cityName) return;

    const GEO_API = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

    fetch(GEO_API)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (!data.length) return alert(`Il n'y a pas de coordonnées pour ${cityName} !`);

            const { name, lat, lon } = data[0];
            getWeatherDetails(name, lat, lon);

        })
        .catch(() => {
            alert('Il y a eu une erreur, réessayer plus tard !');
        });
};

const getUserData = ()=> {
    navigator.geolocation.getCurrentPosition(
        position => {
        // console.log(position);
        const {latitude, longitude} = position.coords;

        const REVERSE_GECODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
        fetch(REVERSE_GECODING_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (!data.length) return alert(`Il n'y a pas de coordonnées pour ${cityName} !`);

            const { name } = data[0];
            getWeatherDetails(name, latitude, longitude);

        })
        .catch(() => {
            alert('Il y a eu une erreur, réessayer plus tard !');
        });
    },
    error => {
       if(error.code === error.PERMISSION_DENIED){
        alert('Veuillez autoriser la géolocalisation')
       }
    }
    
    )
}

searchButton.addEventListener('click', getCityData);
locationBtn.addEventListener('click', getUserData);
cityInput.addEventListener('keyup', e => e.key === "Enter" && getCityData());

