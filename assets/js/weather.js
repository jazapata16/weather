
import { weather_data } from './data.js';

let loadDayForecastData = (data) => {

     
    let element_1=document.querySelector("#dropdownMenuButton");

    let onChange = function(){
        let valores= element_1.value
        
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
        loadWeekForecastData(weather_data);


    }

    element_1.onchange=onChange;



}

let loadWeekForecastData = (data) => {

    let element_2=document.querySelector("#dropdownMenuButton");


        let valores= element_2.value

        for (let i of data){
            if (i["city"] === valores){

                let dia_1=document.getElementById("dia1")
                dia_1.innerHTML=i.forecast_week[0].text;
                let fecha1=document.getElementById("fecha1")
                fecha1.innerHTML=i.forecast_week[0].date;
                let tem_1=document.getElementById("tem1")
                tem_1.innerHTML=i.forecast_week[0].temperature["min"];
                let tem_11=document.getElementById("tem11")
                tem_11.innerHTML=i.forecast_week[0].temperature["max"];
                let ico_1=document.getElementById("ico1")
                ico_1.innerHTML=i.forecast_week[0].icon;

                let dia_2=document.getElementById("dia2")
                dia_2.innerHTML=i.forecast_week[1].text;
                let fecha2=document.getElementById("fecha2")
                fecha2.innerHTML=i.forecast_week[1].date;
                let tem_2=document.getElementById("tem2")
                tem_2.innerHTML=i.forecast_week[1].temperature["min"];
                let tem_21=document.getElementById("tem21")
                tem_21.innerHTML=i.forecast_week[1].temperature["max"];
                let ico_2=document.getElementById("ico2")
                ico_2.innerHTML=i.forecast_week[1].icon;

                let dia_3=document.getElementById("dia3")
                dia_3.innerHTML=i.forecast_week[2].text;
                let fecha3=document.getElementById("fecha3")
                fecha3.innerHTML=i.forecast_week[2].date;
                let tem_3=document.getElementById("tem3")
                tem_3.innerHTML=i.forecast_week[2].temperature["min"];
                let tem_31=document.getElementById("tem31")
                tem_31.innerHTML=i.forecast_week[2].temperature["max"];
                let ico_3=document.getElementById("ico3")
                ico_3.innerHTML=i.forecast_week[2].icon;

                let dia_4=document.getElementById("dia4")
                dia_4.innerHTML=i.forecast_week[3].text;
                let fecha4=document.getElementById("fecha4")
                fecha4.innerHTML=i.forecast_week[3].date;
                let tem_4=document.getElementById("tem4")
                tem_4.innerHTML=i.forecast_week[3].temperature["min"];
                let tem_41=document.getElementById("tem41")
                tem_41.innerHTML=i.forecast_week[3].temperature["max"];
                let ico_4=document.getElementById("ico4")
                ico_4.innerHTML=i.forecast_week[3].icon;

                let dia_5=document.getElementById("dia5")
                dia_5.innerHTML=i.forecast_week[4].text;
                let fecha5=document.getElementById("fecha5")
                fecha5.innerHTML=i.forecast_week[4].date;
                let tem_5=document.getElementById("tem5")
                tem_5.innerHTML=i.forecast_week[4].temperature["min"];
                let tem_51=document.getElementById("tem51")
                tem_51.innerHTML=i.forecast_week[4].temperature["max"];
                let ico_5=document.getElementById("ico5")
                ico_5.innerHTML=i.forecast_week[4].icon;

                let dia_6=document.getElementById("dia6")
                dia_6.innerHTML=i.forecast_week[5].text;
                let fecha6=document.getElementById("fecha6")
                fecha6.innerHTML=i.forecast_week[5].date;
                let tem_6=document.getElementById("tem6")
                tem_6.innerHTML=i.forecast_week[5].temperature["min"];
                let tem_61=document.getElementById("tem61")
                tem_61.innerHTML=i.forecast_week[5].temperature["max"];
                let ico_6=document.getElementById("ico6")
                ico_6.innerHTML=i.forecast_week[5].icon;

                let dia_7=document.getElementById("dia7")
                dia_7.innerHTML=i.forecast_week[6].text;
                let fecha7=document.getElementById("fecha7")
                fecha7.innerHTML=i.forecast_week[6].date;
                let tem_7=document.getElementById("tem7")
                tem_7.innerHTML=i.forecast_week[6].temperature["min"];
                let tem_71=document.getElementById("tem71")
                tem_71.innerHTML=i.forecast_week[6].temperature["max"];
                let ico_7=document.getElementById("ico7")
                ico_7.innerHTML=i.forecast_week[6].icon;

            }

        
        }
    



	
}


loadDayForecastData(weather_data);
loadWeekForecastData(weather_data);