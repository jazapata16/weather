
import { weather_data } from './data.js';

let loadDayForecastData = (data) => {

     
    let element_1=document.querySelector("#dropdownMenuButton");

    let onChange = function(){
        let valores= element_1.value
        let texto = element_1.options[element_1.selectedIndex].text
        console.log(valores)
        
        for (let i of data){
            if (i["city"] === valores){
                console.log(i)
                let ciudad=document.getElementById("city");
                ciudad.innerHTML=i.city ;
                let fecha=document.getElementById("date");
                fecha.innerHTML=i.date;
                let tem_max=document.getElementById("maxtemperature");
                tem_max.innerHTML=i.maxtemperature;
                let tem_min=document.getElementById("mintemperature");
                tem_min.innerHTML=i.mintemperature;
                let cloud=document.getElementById("cloudiness");
                cloud.innerHTML=i.cloudiness;
                let wind=document.getElementById("wind");
                wind.innerHTML=i.wind;
                let rain=document.getElementById("rainfall");
                rain.innerHTML=i.rainfall;

                
                let l_icon=document.getElementById("late_icon");
                l_icon.innerHTML=i.forecast_today[0].icon;
                let l_tem=document.getElementById("late_temperature");
                l_tem.innerHTML=i.forecast_today[0].temperature;
                let l_fore=document.getElementById("late_forecast");
                l_fore.innerHTML=i.forecast_today[0].forecast;
                let l_text=document.getElementById("late_text");
                l_text.innerHTML=i.forecast_today[0].text;

                let n_icon=document.getElementById("night_icon");
                n_icon.innerHTML=i.forecast_today[1].icon;
                let n_tem=document.getElementById("night_temperature");
                n_tem.innerHTML=i.forecast_today[1].temperature;
                let n_fore=document.getElementById("night_forecast");
                n_fore.innerHTML=i.forecast_today[1].forecast;
                let n_text=document.getElementById("night_text");
                n_text.innerHTML=i.forecast_today[1].text;
            }
        }


    }

    element_1.onchange=onChange;


}

let loadWeekForecastData = (data) => {
	arreglo_semana=weather_data[0].forecast_week

    let element_1=document.querySelector("#dropdownMenuButton");

    let onChange = function(){
        let valores= element_1.value
        let texto = element_1.options[element_1.selectedIndex].text
        console.log(valores)

        for (let i of data){
            for (let i of data){

                let dia_1=document.getElementById("dia1")
                dia_1.innerHTML=i.forecast_week[0].text;
                let fecha1=document.getElementById("fecha1")
                fecha1.innerHTML=i.forecast_week[0].date;

                let dia_2=document.getElementById("dia2")
                dia_2.innerHTML=i.forecast_week[1].text;
                let fecha2=document.getElementById("fecha2")
                fecha2.innerHTML=i.forecast_week[1].date;

            }

        }
    }



	
}


loadDayForecastData(weather_data);
loadWeekForecastData(weather_data);