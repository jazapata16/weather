
import { weather_data } from './data.js';

let loadDayForecastData = () => {

    let ciudad=document.getElementById("city");
    ciudad.innerHTML=weather_data[0].city;
    let fecha=document.getElementById("date");
    fecha.innerHTML=weather_data[0].date;
    let tem_max=document.getElementById("maxtemperature");
    tem_max.innerHTML=weather_data[0].maxtemperature;
    let tem_min=document.getElementById("mintemperature");
    tem_min.innerHTML=weather_data[0].mintemperature;
    let cloud=document.getElementById("cloudiness");
    cloud.innerHTML=weather_data[0].cloudiness;
    let wind=document.getElementById("wind");
    wind.innerHTML=weather_data[0].wind;
    let rain=document.getElementById("rainfall");
    rain.innerHTML=weather_data[0].rainfall;

    let l_icon=document.getElementById("late_icon");
    l_icon.innerHTML=weather_data[0].forecast_today[0].icon;
    let l_tem=document.getElementById("late_temperature");
    l_tem.innerHTML=weather_data[0].forecast_today[0].temperature;
    let l_fore=document.getElementById("late_forecast");
    l_fore.innerHTML=weather_data[0].forecast_today[0].forecast;
    let l_text=document.getElementById("late_text");
    l_text.innerHTML=weather_data[0].forecast_today[0].text;

    let n_icon=document.getElementById("night_icon");
    n_icon.innerHTML=weather_data[0].forecast_today[1].icon;
    let n_tem=document.getElementById("night_temperature");
    n_tem.innerHTML=weather_data[0].forecast_today[1].temperature;
    let n_fore=document.getElementById("night_forecast");
    n_fore.innerHTML=weather_data[0].forecast_today[1].forecast;
    let n_text=document.getElementById("night_text");
    n_text.innerHTML=weather_data[0].forecast_today[1].text;

}

let loadWeekForecastData = () => {
	arreglo_semana=weather_data[0].forecast_week
	
}


loadDayForecastData();
loadWeekForecastData();