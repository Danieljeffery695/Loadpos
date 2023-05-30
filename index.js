"use strict";

const navigationIcon = document.getElementById("nav-bar-icon");
const navigationCancel = document.getElementById("nav-cancel-x");
const countryPage = document.querySelector(".countrys");
const leapletMap = document.querySelector(".leaplet--map");
const WeatherApi = document.querySelector(".weather-api__container");
const countryimage = document.querySelector(".country__img");
const continerapii = document.querySelector(".container__api");
const bodytag = document.querySelector(".the-body");
const mapId = document.getElementById("map");

// NAVIGATION EVENT HANDLER

navigationIcon.addEventListener("click", function (e) {
  e.preventDefault();
  const navBar = document.querySelector(".nav-bar");
  navBar.style.display = "flex";
  this.style.display = "none";
  this.style.zIndex = "0";
  if ((navigationIcon.style.display = "none")) {
    // navigationIcon.innerHTML += navigationCancel;
    navigationCancel.style.opacity = "1";
    navigationCancel.style.display = "flex";
  }
});

navigationCancel.addEventListener("click", function (e) {
  e.preventDefault();
  const navBar = document.querySelector(".nav-bar");
  navBar.style.display = "none";
  this.style.display = "none";
  navigationIcon.style.display = "flex";
});

// FETCHING OF DATA

// const userLocation = function() {

// }

// MONALISA FUNCTIONS

const monalisa = function (data) {
  if (data.name.common === "Portugal") {
    return data.languages.por;
  }
  if (data.name.common === "Canada") {
    return data.languages.eng;
  }
  if (data.name.common === "United States") {
    return data.languages.eng;
  }
  if (data.name.common === "South Korea") {
    return data.languages.kor;
  }
  if (data.name.common === "Japan") {
    return data.languages.jpn;
  }
  if (data.name.common === "Algeria") {
    return data.languages.ara;
  }
  if (data.name.common === "Nigeria") {
    return data.languages.eng;
  }
  if (data.name.common === "British Indian Ocean Territory") {
    return data.languages.eng;
  } else {
    console.log("Can't find anything");
  }
};

const monalisa1 = function (data) {
  if (data.name.common === "Portugal") {
    return data.currencies.EUR.name;
  }
  if (data.name.common === "Canada") {
    return data.currencies.CAD.name;
  }
  if (data.name.common === "United States") {
    return data.currencies.USD.name;
  }
  if (data.name.common === "South Korea") {
    return data.currencies.KRW.name;
  }
  if (data.name.common === "Japan") {
    return data.currencies.JPY.name;
  }
  if (data.name.common === "Algeria") {
    return data.currencies.DZD.name;
  }
  if (data.name.common === "Nigeria") {
    return data.currencies.NGN.name;
  }
  if (data.name.common === "British Indian Ocean Territory") {
    return data.currencies.USD.name;
  } else {
    console.log("Can't find anything");
  }
};

const monalisa4 = function (data1) {
  if (data1.geoplugin_countryName === "Portugal") {
    return data1.geoplugin_countryName;
  }
  if (data1.geoplugin_countryName === "Canada") {
    return data1.geoplugin_countryName;
  }
  if (data1.geoplugin_countryName === "United State") {
    return data1.geoplugin_countryCode;
  }
  if (data1.geoplugin_countryName === "South Korea") {
    return data1.geoplugin_countryName;
  }
  if (data1.geoplugin_countryName === "Japan") {
    return data1.geoplugin_countryName;
  }
  if (data1.geoplugin_countryName === "Algeria") {
    return data1.geoplugin_countryName;
  }
  if (data1.geoplugin_countryName === "Nigeria") {
    return data1.geoplugin_countryName;
  }
  if (data1.geoplugin_countryName === "British Indian Ocean Territory") {
    return data1.geoplugin_countryName;
  } else {
    alert("sorry our service it not yet available in your country");
    return (bodytag.style.display = "none");
  }
};

const monalisa3 = function (data) {
  if (!data.borders) {
    return data.name.common;
  }
  if (data.borders.length === 1) {
    return data.borders[0];
  }
  if (data.borders.length === 2) {
    return data.borders[1];
  } else {
    return data.borders[0];
  }
};

const renderError = function (msg) {
  continerapii.insertAdjacentText("beforeend", msg);
  continerapii.style.opacity = "0";
};

// END OF MONALISA FUNCTION

// GETTING LOCATION ENDS HERE

// const gettingCountry = async function(api) {
//     try {

//       const res = await fetch(`http://www.geoplugin.net/json.gp?ip=${api}`);
//           console.log(res);
//           const data1 = await res.json();
//           console.log(data1);

//         const response = await fetch(`https://restcountries.com/v3.1/name/${monalisa4(data1)}`);
//         // console.log(response)
//         const [data] = await response.json()
//         console.log(data);

//       const rep1 = await fetch(`https://restcountries.com/v3.1/name/${monalisa3(data)}`);
//       const [data2] = await rep1.json();
//       console.log(data2);

//         const html = `
//         <img src="${data.flags.png}" alt="country" class="border--country">
//         <div class="countries">
//           <article class="country">
//           <p class="border-text">BORDER COUNTRY/${data2.name.common}</p>
//             <img class="country__img" src="${data2.flags.png}"/>
//             <div class="country__data">
//               <h3 class="country__name">${data.name.common}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${monalisa(data)}</p>
//               <p class="country__row"><span>💰</span>${monalisa1(data)}</p>
//             </div>
//           </article>
//         </div>`
//         countryPage.insertAdjacentHTML("beforeend", html);
//       } catch (err) {
//         console.error(`${err}`);
//         renderError(`something went wrong 💥 ${err.message}`);

//         throw err;
//       }
// }

// gettingCountry();

// SETTING UP THE MAP

//  if(!navigator.geolocation) {
//    alert("sorry your browser does'nt support this...")
//   } else {
//     navigator.geolocation.getCurrentPosition(getposition)
//   }

// function getposition(position) {

//     console.log(position);

//     const {latitude} = position.coords;
//     const {longitude} = position.coords;
//     const {accuracy} = position.coords;

//   let  map = L.map('map').setView([latitude, longitude], 8 );
//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);
//     const marker = L.marker([latitude, longitude]).addTo(map).bindPopup(`location i think`).openPopup()
//     const circle = L.circle([latitude, longitude], {radius: accuracy}).addTo(map);

//     map.on("click", function(e) {
//     console.log(e);
//     const secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

//     L.Routing.control({
//       waypoints: [
//         L.latLng(latitude, longitude),
//         L.latLng(e.latlng.lat, e.latlng.lng)
//       ]
//     }).on("click", function(e) {
//       console.log(e);
//       e.routes[0].coordinates.forEach(function(coord, index) {
//         setTimeout(function() {
//           marker.setLatLng([coord.lat, coord.lng])
//         }, 100 + index)
//       })
//     })

//     .addTo(map);
//     alert("Thank you for using loadpos. Please clear your map and use it again");
//     leapletMap.style.pointerEvents = "none"
//   })

// }

// SETTING WEATHER API
// const req = new XMLHttpRequest();
// req.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FChicago", true)
// req.onload = function(lat, lon, timezone) {
//     if (req.status === 200) {
//         const json = JSON.parse(req.responseText);
//         console.log(json);

//         let params = {
//           latitude: lat,
//           longitude: lon,
//           timezone,
//         }
//         console.log(params);
//     }
// }
// req.send()

const current_temp = document.querySelector(".data-current-temp");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const span4 = document.querySelector(".span4");
const span5 = document.querySelector(".span5");
const span6 = document.querySelector(".span6");
const left_icon = document.querySelector(".left-icon");
const div_lefticon = document.querySelector(".div-left_icon");
const mondayTime = document.querySelector(".monday-time-temp");
const tuesdayTime = document.querySelector(".tuesday-time-temp");
const wednesdayTime = document.querySelector(".wednesday-time-temp");
const thursdayTime = document.querySelector(".thursday-time-temp");
const fridayTime = document.querySelector(".friday-time-temp");
const saturdayTime = document.querySelector(".saturday-time-temp");
const sundayTime = document.querySelector(".sunday-time-temp");
const dailyFormat1 = document.querySelector(".daily-formatter");
const weeklydays = document.querySelector(".weeklydays-top")



// const ICON_MAP = new Map();
// addMapping([0, 1], "sun");
// addMapping([2], "cloud-sun");
// addMapping([3], "cloud");
// addMapping([45, 48], "smog");
// addMapping([
//   52, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud-showers-heavy");

//   addMapping([71, 73, 75, 77, 85, 86], "snowflake");
//   addMapping([95, 96, 99], "cloud-bolt");
  

// function addMapping(value, icon) {
//  value.forEach(value => {
//   ICON_MAP.set(value, icon);
//  });
// }

const setUp = function(iconplace, ele) {
  if(iconplace <= 1) {
    ele.innerHTML = `<i class="fa-sharp fa-solid fa-sun left-icon"></i>`
  } if(iconplace <= 2) {
    ele.innerHTML = `<i class="fa-solid fa-sun-cloud left-icon"></i>`
  } if(iconplace <= 3) {
    ele.innerHTML = `<i class="fa-solid fa-clouds left-icon"></i>`
  } if(iconplace <= 48) {
    ele.innerHTML = `<i class="fa-solid fa-smog left-icon"></i>`
  } if(iconplace <= 67 ) {
    ele.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy left-icon"></i>`
  } if(iconplace <= 77) {
    ele.innerHTML = `<i class="fa-solid fa-snowflake left-icon"></i>`
  } if(iconplace <= 82) {
    ele.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy left-icon"></i>`
  } if(iconplace <= 86) {
    ele.innerHTML = `<i class="fa-solid fa-snowflake left-icon"></i>`
  } if(iconplace >= 99) {
    ele.innerHTML = `<i class="fa-solid fa-cloud-bolt left-icon"></i>`
  }
}

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {weekday: "long"})
// const dailyformater = document.querySelector(".daily-formatter");



const getWeatherapi = async function (api) {
  try {
    const res = await fetch(`http://www.geoplugin.net/json.gp?ip=${api}`);
          console.log(res);
          const data1 = await res.json();
          console.log(data1);


    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${data1.geoplugin_latitude}&longitude=${data1.geoplugin_longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=${data1.geoplugin_timezone}`
    );
    console.log(response);
    const data = await response.json();
    const {
      temperature: currentTemp,
      windspeed: windSpeed,
      weathercode: iconCode,
    } = data.current_weather;

     current_temp.innerHTML = `${Math.round(currentTemp)}<a>&deg;</a>`;
     
    const {
      temperature_2m_max: [maxTemp],
      temperature_2m_min: [minTemp],
      apparent_temperature_max: [maxFeelsLike],
      apparent_temperature_min: [minFeelsLike],
      precipitation_sum: [precip],
      // time: [monday, tuesday, wednesday, thursday, friday, saturday, sunday],
    } = data.daily;

    function parseDaily() {
      return data.daily.time.map((time, index) => {
        return {
        timestamp: time * 1000,
        iconCode: data.daily.weathercode[index],
        maxTemp: Math.round(data.daily.temperature_2m_max[index])
      }  
    })
  }


    function parseHourly() {
      return data.hourly.time.map((time, index) => {
        return {
          timestamp: time * 1000,
          iconCode: data.hourly.weathercode[index],
          temp: Math.round(data.hourly.temperature_2m[index]),
          feelsLike: Math.round(data.hourly.apparent_temperature[index]),
          windSpeed: Math.round(data.hourly.windspeed_10m[index]),
          precip: Math.round(data.hourly.precipitation_probability[index] * 100 / 100),
        }
      }).filter(({ timestamp }) => 
        timestamp >= data.current_weather.time * 1000)
    }

    console.log(parseDaily());
    console.log(parseHourly());



    span1.innerHTML = `${Math.round(maxTemp)}<a>&deg;</a>`;
    span2.innerHTML = `${Math.round(maxFeelsLike)}<a>&deg;</a>`;
    span3.innerHTML = `${windSpeed}mph`;
    span4.innerHTML = `${Math.round(minTemp)}<a>&deg;</a>`;
    span5.innerHTML = `${Math.round(minFeelsLike)}<a>&deg;</a>`;
    span6.innerHTML = `${precip}m`; 

    setUp(currentTemp, div_lefticon);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getWeatherapi();
