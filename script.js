let $city = document.querySelector('#city')
let $currentTemp = document.querySelector('#currentTemp')
let $currntDesk = document.querySelector('#currntDesk')
let $max = document.querySelector('#max')
let $min = document.querySelector('#min')
let $currentImg = document.querySelector('#currentImg')
let $hourly = document.querySelector('.hourly')
let $daily = document.querySelector('.daily')
let str = ''


navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude 
    let lon = position.coords.longitude
    let key = "2cfda1f27f8f18422038c85cc30073ad"
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    getData(url)
});
async function getData(url){
    let resp = await fetch(url)
    let data = await resp.json()
        currentData(data.weather)
        // hourlyData(data.hourly)
        // dailyData(data.daily)
    console.log(data);

    console.log(data.coord);
    console.log(data.weather);
}
// getData()

function currentData(current) {
    $city.textContent = 'Сегодня'
    str = current.weather.main
    $currntDesk.textContent = str[0].toUpperCase() + str.slice(1);
    $currentImg.setAttribute('src', `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`)
    $currentTemp.textContent = Math.floor(current.temp) + `°`
}
// function hourlyData(hourly) {
//     hourly.forEach((element, index) => {
//         let hour = new Date().getHours() + index
//         $hourly.insertAdjacentHTML('beforeend', `
//             <div class="hour">    
//                 <p>${index == 0 ? hour : hour < 24 ? hour : hour - 24*Math.floor(hour/24)}:00</p>
//                 <img src='https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png'></img>
//                 <p>${Math.floor(element.temp)}°</p>
//             </div>
//         `)            
//     });
// }

// function dailyData(daily){
//     let ch = 0
//     daily.forEach(element => {
//         ch++
//         function getWeekDay(date) {
//             let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//             return days[date.getDay()];
//           }
//           let date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+ch)
//         str = element.weather[0].description
//         $daily.insertAdjacentHTML('beforeend', `
//             <div class='day'>
//                 <h3>${new Date().getDate()+ch}.${new Date().getMonth()+1}</h3>
//                 <h3>${getWeekDay(date)}</h3>
//                 <img src='https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png'></img>
//                 <h4>${str[0].toUpperCase() + str.slice(1)}</h4>
//                 <div class='day_time'>
//                     <p>Температура днем.:${Math.floor(element.temp.day)}°</p>
//                     <p>Чувствуется как.:${Math.floor(element.feels_like.day)}°</p>
//                 </div>
//                 <div class='night_time'>
//                     <p>Температура ночью.:${Math.floor(element.temp.night)}°</p>
//                     <p>Чувствуется как.:${Math.floor(element.feels_like.night)}°</p>
//                 </div>
//             </div>
//         `)
//     });

// }

console.log('salam')
// let myArray = [1, 2, 3,4 ,5, 6]
// console.log(myArray);