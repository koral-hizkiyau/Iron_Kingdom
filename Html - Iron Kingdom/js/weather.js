



var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=Tel Aviv,IL&appid=16fae9eba8b6142d4cd64caf03782b6a';


$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData){ 
    var cels = weatherData.main.temp;
    var cel = Math.round(cels-273.15);
            var icons = weatherData.weather[0].icon;
console.log(icons);
    var srrc = 'http://openweathermap.org/img/wn/'+icons+'@2x.png';
    $('.weatherResponse').append(cel + '<sup>0</sup><img src="http://openweathermap.org/img/wn/'+icons+'@2x.png" style=display:inline-block"; > ');
    
  

}



