const temperatureImageElement = document.querySelector(".temperature__image");
const tempElement = document.querySelector(".temperature__value p");
const daysTempElement = document.querySelector(".widget__days");


const days = ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb'];


var weatherMain = {};
var weatherSmall = [];

const response = {"lat":52.66,"lon":17.98,"timezone":"Europe/Warsaw","current":{"dt":1586117426,"sunrise":1586059920,"sunset":1586107738,"temp":280.63,"feels_like":275.79,"pressure":1031,"humidity":39,"dew_point":268.21,"uvi":4.28,"clouds":0,"visibility":10000,"wind_speed":3.1,"wind_deg":120,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},"hourly":[{"dt":1586116800,"temp":280.63,"feels_like":274.79,"pressure":1031,"humidity":39,"dew_point":268.21,"clouds":0,"wind_speed":4.53,"wind_deg":124,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586120400,"temp":279.64,"feels_like":273.98,"pressure":1031,"humidity":51,"dew_point":270.58,"clouds":0,"wind_speed":4.69,"wind_deg":129,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586124000,"temp":279.03,"feels_like":273.39,"pressure":1032,"humidity":58,"dew_point":271.61,"clouds":0,"wind_speed":4.87,"wind_deg":135,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586127600,"temp":278.39,"feels_like":273.12,"pressure":1032,"humidity":63,"dew_point":272.07,"clouds":0,"wind_speed":4.45,"wind_deg":131,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586131200,"temp":277.81,"feels_like":272.57,"pressure":1032,"humidity":66,"dew_point":272.14,"clouds":0,"wind_speed":4.42,"wind_deg":129,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586134800,"temp":277.45,"feels_like":272.04,"pressure":1032,"humidity":68,"dew_point":271.1,"clouds":0,"wind_speed":4.67,"wind_deg":131,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586138400,"temp":277.12,"feels_like":271.56,"pressure":1031,"humidity":69,"dew_point":271,"clouds":0,"wind_speed":4.87,"wind_deg":129,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586142000,"temp":276.77,"feels_like":271.34,"pressure":1031,"humidity":71,"dew_point":270.91,"clouds":0,"wind_speed":4.69,"wind_deg":129,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586145600,"temp":276.33,"feels_like":271.03,"pressure":1031,"humidity":73,"dew_point":270.66,"clouds":0,"wind_speed":4.49,"wind_deg":129,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586149200,"temp":276.59,"feels_like":271,"pressure":1031,"humidity":71,"dew_point":270.77,"clouds":0,"wind_speed":4.89,"wind_deg":131,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586152800,"temp":278.7,"feels_like":272.21,"pressure":1031,"humidity":62,"dew_point":271.31,"clouds":0,"wind_speed":6.21,"wind_deg":141,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586156400,"temp":280.76,"feels_like":274.23,"pressure":1031,"humidity":55,"dew_point":272.15,"clouds":0,"wind_speed":6.32,"wind_deg":145,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586160000,"temp":282.75,"feels_like":276.44,"pressure":1031,"humidity":49,"dew_point":273.22,"clouds":0,"wind_speed":6.05,"wind_deg":145,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586163600,"temp":284.53,"feels_like":278.75,"pressure":1031,"humidity":48,"dew_point":274.53,"clouds":0,"wind_speed":5.58,"wind_deg":147,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586167200,"temp":286.41,"feels_like":280.89,"pressure":1030,"humidity":46,"dew_point":275.55,"clouds":0,"wind_speed":5.47,"wind_deg":154,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586170800,"temp":287.92,"feels_like":282.44,"pressure":1030,"humidity":43,"dew_point":276.08,"clouds":0,"wind_speed":5.51,"wind_deg":161,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586174400,"temp":289.05,"feels_like":283.51,"pressure":1029,"humidity":41,"dew_point":276.4,"clouds":0,"wind_speed":5.68,"wind_deg":159,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586178000,"temp":289.73,"feels_like":284.15,"pressure":1029,"humidity":40,"dew_point":276.7,"clouds":0,"wind_speed":5.81,"wind_deg":159,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586181600,"temp":290.04,"feels_like":284.54,"pressure":1028,"humidity":40,"dew_point":276.97,"clouds":0,"wind_speed":5.77,"wind_deg":159,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586185200,"temp":289.89,"feels_like":284.86,"pressure":1028,"humidity":43,"dew_point":277.82,"clouds":0,"wind_speed":5.32,"wind_deg":156,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586188800,"temp":288.74,"feels_like":284.68,"pressure":1028,"humidity":51,"dew_point":279.29,"clouds":0,"wind_speed":4.34,"wind_deg":148,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586192400,"temp":286.29,"feels_like":282.54,"pressure":1028,"humidity":59,"dew_point":279.07,"clouds":0,"wind_speed":3.84,"wind_deg":151,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586196000,"temp":284.44,"feels_like":280.58,"pressure":1028,"humidity":63,"dew_point":278.2,"clouds":0,"wind_speed":3.77,"wind_deg":154,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586199600,"temp":283.99,"feels_like":279.47,"pressure":1029,"humidity":63,"dew_point":277.86,"clouds":0,"wind_speed":4.59,"wind_deg":165,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586203200,"temp":283.64,"feels_like":278.88,"pressure":1029,"humidity":63,"dew_point":277.34,"clouds":0,"wind_speed":4.85,"wind_deg":184,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586206800,"temp":282.87,"feels_like":278.1,"pressure":1029,"humidity":64,"dew_point":276.97,"clouds":0,"wind_speed":4.73,"wind_deg":191,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586210400,"temp":281.96,"feels_like":277.54,"pressure":1030,"humidity":67,"dew_point":276.8,"clouds":0,"wind_speed":4.17,"wind_deg":194,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586214000,"temp":281.39,"feels_like":276.92,"pressure":1030,"humidity":69,"dew_point":276.64,"clouds":0,"wind_speed":4.22,"wind_deg":194,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586217600,"temp":281.58,"feels_like":276.53,"pressure":1029,"humidity":65,"dew_point":275.91,"clouds":0,"wind_speed":4.88,"wind_deg":193,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586221200,"temp":281.37,"feels_like":276.18,"pressure":1030,"humidity":63,"dew_point":275.26,"clouds":0,"wind_speed":4.93,"wind_deg":195,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586224800,"temp":280.75,"feels_like":275.63,"pressure":1030,"humidity":64,"dew_point":274.8,"clouds":0,"wind_speed":4.75,"wind_deg":196,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586228400,"temp":280.15,"feels_like":274.96,"pressure":1030,"humidity":65,"dew_point":274.51,"clouds":0,"wind_speed":4.76,"wind_deg":196,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586232000,"temp":279.74,"feels_like":274.46,"pressure":1030,"humidity":65,"dew_point":274.19,"clouds":0,"wind_speed":4.81,"wind_deg":194,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586235600,"temp":279.92,"feels_like":274.59,"pressure":1030,"humidity":66,"dew_point":274.54,"clouds":0,"wind_speed":4.96,"wind_deg":199,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586239200,"temp":281.59,"feels_like":276.01,"pressure":1030,"humidity":62,"dew_point":275.17,"clouds":0,"wind_speed":5.49,"wind_deg":209,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586242800,"temp":283.33,"feels_like":277.92,"pressure":1030,"humidity":57,"dew_point":275.78,"clouds":0,"wind_speed":5.35,"wind_deg":213,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586246400,"temp":285.03,"feels_like":280.18,"pressure":1030,"humidity":55,"dew_point":276.78,"clouds":0,"wind_speed":4.81,"wind_deg":219,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586250000,"temp":286.71,"feels_like":282.33,"pressure":1030,"humidity":53,"dew_point":277.99,"clouds":0,"wind_speed":4.41,"wind_deg":216,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586253600,"temp":288.58,"feels_like":284.54,"pressure":1030,"humidity":51,"dew_point":279.02,"clouds":0,"wind_speed":4.27,"wind_deg":227,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586257200,"temp":290.01,"feels_like":286.22,"pressure":1030,"humidity":49,"dew_point":279.77,"clouds":0,"wind_speed":4.12,"wind_deg":233,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586260800,"temp":291.07,"feels_like":287.59,"pressure":1030,"humidity":47,"dew_point":280.09,"clouds":0,"wind_speed":3.79,"wind_deg":246,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586264400,"temp":291.74,"feels_like":288.5,"pressure":1030,"humidity":45,"dew_point":280.25,"clouds":0,"wind_speed":3.45,"wind_deg":256,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586268000,"temp":292.07,"feels_like":289.1,"pressure":1030,"humidity":45,"dew_point":280.54,"clouds":0,"wind_speed":3.16,"wind_deg":269,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586271600,"temp":291.85,"feels_like":289.4,"pressure":1030,"humidity":47,
"dew_point":280.8,"clouds":0,"wind_speed":2.55,"wind_deg":275,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586275200,"temp":291.21,"feels_like":289.75,"pressure":1030,"humidity":53,"dew_point":282.09,"clouds":0,"wind_speed":1.53,"wind_deg":260,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586278800,"temp":288.68,"feels_like":287.08,"pressure":1030,"humidity":59,"dew_point":281.17,"clouds":0,"wind_speed":1.47,"wind_deg":235,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]},{"dt":1586282400,"temp":286.63,"feels_like":284.8,"pressure":1031,"humidity":67,"dew_point":281.17,"clouds":0,"wind_speed":1.77,"wind_deg":301,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]},{"dt":1586286000,"temp":285.41,"feels_like":282.72,"pressure":1031,"humidity":75,"dew_point":281.73,"clouds":20,"wind_speed":3.17,"wind_deg":346,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}]}],"daily":[{"dt":1586080800,"sunrise":1586059920,"sunset":1586107738,"temp":{"day":280.63,"min":279.04,"max":280.63,"night":279.04,"eve":280.63,"morn":280.63},"feels_like":{"day":275.01,"night":273.32,"eve":275.01,"morn":275.01},"pressure":1031,"humidity":39,"dew_point":268.21,"wind_speed":4.22,"wind_deg":112,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":0,"uvi":4.28},{"dt":1586167200,"sunrise":1586146181,"sunset":1586194243,"temp":{"day":284.53,"min":276.76,"max":289.89,"night":282.87,"eve":289.89,"morn":276.76},"feels_like":{"day":278.75,"night":278.1,"eve":284.86,"morn":271.3},"pressure":1031,"humidity":48,"dew_point":274.53,"wind_speed":5.58,"wind_deg":147,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"uvi":4.17},{"dt":1586253600,"sunrise":1586232441,"sunset":1586280748,"temp":{"day":286.71,"min":280.15,"max":291.85,"night":283.5,"eve":291.85,"morn":280.15},"feels_like":{"day":282.33,"night":280.48,"eve":289.4,"morn":274.96},"pressure":1030,"humidity":53,"dew_point":277.99,"wind_speed":4.41,"wind_deg":216,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"uvi":3.67},{"dt":1586340000,"sunrise":1586318702,"sunset":1586367253,"temp":{"day":287.8,"min":280.05,"max":291.59,"night":284,"eve":291.59,"morn":280.05},"feels_like":{"day":285.7,"night":280.53,"eve":288.61,"morn":276.82},"pressure":1029,"humidity":62,"dew_point":281.14,"wind_speed":2.15,"wind_deg":164,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"uvi":3.75},{"dt":1586426400,"sunrise":1586404964,"sunset":1586453759,"temp":{"day":287.5,"min":279.81,"max":291.17,"night":279.81,"eve":288.36,"morn":280.74},"feels_like":{"day":282.89,"night":274.3,"eve":283.14,"morn":276.52},"pressure":1019,"humidity":54,"dew_point":278.78,"wind_speed":5.03,"wind_deg":238,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":0,"rain":0.7,"uvi":4.09},{"dt":1586512800,"sunrise":1586491226,"sunset":1586540264,"temp":{"day":283.69,"min":276.67,"max":285.61,"night":279.02,"eve":285.3,"morn":276.67},"feels_like":{"day":278.56,"night":275.61,"eve":279.93,"morn":271.36},"pressure":1025,"humidity":50,"dew_point":274.25,"wind_speed":4.61,"wind_deg":296,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"uvi":4.42},{"dt":1586599200,"sunrise":1586577489,"sunset":1586626769,"temp":{"day":285.19,"min":277.08,"max":288.31,"night":285.01,"eve":288.31,"morn":277.08},"feels_like":{"day":280.43,"night":280,"eve":284.18,"morn":273.43},"pressure":1020,"humidity":47,"dew_point":274.75,"wind_speed":4.2,"wind_deg":165,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":91,"uvi":4.3},{"dt":1586685600,"sunrise":1586663752,"sunset":1586713275,"temp":{"day":279.86,"min":277.72,"max":283.84,"night":277.72,"eve":281.72,"morn":283.84},"feels_like":{"day":272.01,"night":271.35,"eve":275.17,"morn":276.87},"pressure":1010,"humidity":73,"dew_point":275.91,"wind_speed":8.87,"wind_deg":276,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":93,"rain":1.89,"uvi":4.08}]}



const KELVIN = 273;

const key = "28f56e963ea97992d83467f0640bddb9";

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}


function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p>${error.message}</p>`;
}

function getDay(date) {
  const newDate = new Date(date*1000);
  return days[newDate.getDay()];
}

function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=5&appid=${key}`;
  fetch(api)
    .then(function(response){
    let data = response.json();
    return data;
    }).then(function(data){
      console.log(data.daily)
      for (let i = 1; i < 5; i++) {
       weatherSmall.push({
        temperature: Math.floor(data.daily[i].temp.day - KELVIN),
        day: getDay(data.daily[i].dt),
        icon: data.daily[i].weather[0].icon
      })}
      weatherMain = {
        temperature: Math.floor(data.daily[0].temp.day - KELVIN),
        iconId: data.daily[0].weather[0].icon,
        unit: "celcius" 
      }
    }).then(function() {
      displayMainWeather();
      displaySmallWeather();
    
    })

      // return data;
    // })
    // .then(function(data){
      // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      // weather.description = data.weather[0].description;
      // weather.iconId = data.weather[0].icon;
      // weather.city = data.name;
      // weather.country = data.sys.country;
    // })
    // .then(function(){
      // displayWeather();
    // });
}

function displayMainWeather() {
  temperatureImageElement.innerHTML = `<img class="temperature__icon" src="/${weatherMain.iconId}.png">`;
  tempElement.innerHTML = `${weatherMain.temperature}°<span>C</span>`;
}

function displaySmallWeather() {
  let daysSmall = "";
  weatherSmall.forEach(weatherElement => {
    daysSmall += `<div class="day">
    <img class="temperature__icon" src="/${weatherElement.icon}.png">
      <div>${weatherElement.day}</div>
    <p>${weatherElement.temperature}°<span>C</span></p>
  </div>`
  });
  console.log(daysSmall)
  daysTempElement.innerHTML = daysSmall;
}

function celsiusToFahrenheit(temperature) {
  return (temperature * 9/5) + 32;
}
