var cityImages = {
    "Adilabad":"https://upload.wikimedia.org/wikipedia/commons/0/03/Adilabad_District_Revenue_divisions_map.png",
    "Hyderabad":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hyderabad_District_IN.jpg/405px-Hyderabad_District_IN.jpg",
    "Jangaon" :"https://upload.wikimedia.org/wikipedia/commons/1/17/Jangaon_District_Revenue_divisions.png",
    "Karimnagar":"https://upload.wikimedia.org/wikipedia/commons/3/32/Karimnagar_District_Revenue_divisions.png",
    "Khammam":"https://scontent.fhyd2-1.fna.fbcdn.net/v/t31.18172-8/15874795_1891227717763690_2623866922401736685_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TphDmjtyfjMAX9D4iU0&tn=1gftVPYUD7zM_czp&_nc_ht=scontent.fhyd2-1.fna&oh=2a15783e8c4f04b2a1e449d2cf341c20&oe=60EE027B",
    "Mahabubabad":"https://upload.wikimedia.org/wikipedia/commons/5/52/Mahabubabad_district_map.png",
    "Mahbubnagar":"https://www.telangana.gov.in/Pictures/Stateprofile/Mahaboobnagar.jpg",
    "Mancherial":"https://upload.wikimedia.org/wikipedia/commons/a/af/Mancherial_District_Revenue_divisions.png",
    "Medak":"https://upload.wikimedia.org/wikipedia/commons/2/23/Medak_District_Revenue_divisions.png",
    "Nagarkurnool":"https://upload.wikimedia.org/wikipedia/commons/1/1b/Nagarkurnool_District_Revenue_divisions.png",
    "Narayanpet":"https://helloap.com/wp-content/uploads/2019/02/Narayanapet-District-Map.jpg",
    "Nalgonda":"https://upload.wikimedia.org/wikipedia/commons/b/b9/Nalgonda_District_Revenue_divisions.png",
    "Nirmal":"https://upload.wikimedia.org/wikipedia/commons/4/42/Nirmal_District_Revenue_divisions.png",
    "Nizamabad":"https://upload.wikimedia.org/wikipedia/commons/2/2b/Nizamabad_Mandals.jpg",
    "Peddapalli":"https://upload.wikimedia.org/wikipedia/commons/3/32/Peddapalli_District_Revenue_divisions.png",
    "Sangareddy":"https://upload.wikimedia.org/wikipedia/commons/9/93/Sangareddy_District_Revenue_divisions.png",
    "Siddipet":"https://upload.wikimedia.org/wikipedia/commons/6/66/Siddipet_District_Revenue_divisions.png",
    "Suryapet":"https://upload.wikimedia.org/wikipedia/commons/a/ae/Suryapet_District_Revenue_divisions.png",
    "Vikarabad":"https://cdn.s3waas.gov.in/s3d3d9446802a44259755d38e6d163e820/uploads/2020/05/2020050345.jpg",
    "Warangal":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Warangal_%28rural%29_District_Revenue_divisions.png",
}


function generate(){
    var cityname = document.getElementById('drop-down').value;

    var request = new XMLHttpRequest();
    request.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=93f26e3c57081a6210de53b8dcfdfea4`,true);

    request.onload = function(){
        if(request.status>=200 && request.status<400){
            var data = JSON.parse(request.responseText);
            console.log(data);

            // City info
            document.getElementById('city-name').innerHTML = data.name;
            document.getElementById('city-location').innerHTML = "<p><i>Longitude: </i>"+ data.coord.lon + "</p><p><i>Latitude: </i>" + data.coord.lat+"</p>";
            var image = cityImages[cityname];
            document.getElementById('city-img').innerHTML = `<img width=50% height=50% src=${image} alt="city image">`;

            // Weather Info
            document.getElementById('info').innerHTML = 
                `<p><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt='weather_icon'></p>
                <p><i>Temperature: </i>${String(data.main.temp-273).slice(0,4)} °C / ${data.main.temp} K</p>
                <p><i>Pressure: </i>${data.main.pressure} hpa</p>
                <p><i>Humidity: </i>${data.main.humidity} %</p>
                <p><i>Wind Speed: </i>${data.wind.speed} m/s</p>
                <p><i>Wind Direction: </i>${data.wind.deg}</p>
                <p><i>Cloudiness: </i>${data.clouds.all} %</p>
                `;

        }
        else{
            console.log("some error");
        }
    };
    request.onerror = function(){
        console.log("connection error");
    };
    request.send();
}