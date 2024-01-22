$(document).ready(function () {
    var cursor = document.getElementById('mouse')
    window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        cursor.style.left = mouseX - 50 + "px"
        cursor.style.top = mouseY - 50 + "px"
    }
    $('#WWW').mouseenter(function () {
        cursor.style.display = 'block';
    });

    $('#WWW').mouseleave(function () {
        cursor.style.display = 'none';
    });


    //time section 
    setTime = () => {
        var date = new Date();
        var hours_full = date.getHours();
        if (hours_full > 12) {
            var hours = hours_full - 12;
            document.getElementById('time-am-pm').innerText = " pm";
            document.getElementById('time-hours').innerText = hours;
        }
        else {
            document.getElementById('time-am-pm').innerText = " am";
            document.getElementById('time-hours').innerText = hours_full;

        }
        var minutes = date.getMinutes();

        document.getElementById('time-minutes').innerText = minutes.toString().padStart(2, 0);

    }
    setInterval(setTime, 1000);
    setTime();


    // serach section
    const cityname = document.getElementById('input');
    const temp_number = document.getElementById('temp_number');
    const temp_text = document.getElementById('weather_text');
    const getinfo = async () => {
        var cityval = cityname.value;

        if (cityval === "") {
            document.getElementById('cityname').innerText = "Please write the name before search"
            document.getElementById('cityname').style.color = "red"
        } else {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e2f5fcfbdd43072c3afeef644af6bff7`;
                const response = await fetch(url)
                document.getElementById('cityname').innerText = cityval.charAt(0).toUpperCase() + cityval.slice(1);
                document.getElementById('cityname').style.color = "black"
                const data = await response.json();
                const arrData = [data]
                // console.log(arrData)
                temp_number.innerText = (arrData[0].main.temp - 273.15).toFixed(2);
                temp_text.innerHTML = (arrData[0].weather[0].main)
                window.tempicon = arrData[0].weather[0].icon
                set_con();

            }
            catch {
                document.getElementById('cityname').innerText = "City name not found"
                document.getElementById('cityname').style.color = "red"
            }

        }

    }
    $("#submit_btn").click(function (e) {
        e.preventDefault();
        getinfo();
    });



    const set_con = () => {
        var weathericon = document.getElementById('weather_situation')
        // temprature script 
        const iconMappings = {
            "01n": { icon: "fa-moon", background: "#041A40", color: "white" },
            "01d": { icon: "fa-sun", background: "", color: "black" },
            "02n": { icon: "fa-cloud-moon", background: "#041A40", color: "white" },
            "02d": { icon: "fa-cloud-sun", background: "", color: "black" },
            "03n": { icon: "fa-cloud", background: "#041A40", color: "white" },
            "03d": { icon: "fa-cloud", background: "", color: "black" },
            "04n": { icon: "fa-cloud", background: "#041A40", color: "white" },
            "04d": { icon: "fa-cloud", background: "", color: "black" },
            "09n": { icon: "fa-cloud-showers-water", background: "#041A40", color: "white" },
            "09d": { icon: "fa-cloud-showers-water", background: "", color: "black" },
            "10n": { icon: "fa-cloud-rain", background: "#041A40", color: "white" },
            "10d": { icon: "fa-cloud-rain", background: "", color: "black" },
            "11n": { icon: "fa-cloud-bolt", background: "#041A40", color: "white" },
            "11d": { icon: "fa-cloud-bolt", background: "", color: "black" },
            "13n": { icon: "fa-snowflake", background: "#041A40", color: "white" },
            "13d": { icon: "fa-snowflake", background: "", color: "black" },
            "50n": { icon: "fa-smog", background: "#041A40", color: "white" },
            "50d": { icon: "fa-smog", background: "", color: "black" },
            // Add more mappings as needed
        };

        const mapping = iconMappings[tempicon];

        if (mapping) {
            const box = document.getElementById('dt-right')
            const { icon, background, color } = mapping;
            weathericon.innerHTML = `<i class="fa-solid ${icon}" style="color: #EBC969;"></i>`;
            box.style.background = background || "";
            box.style.color = color || '';
        }


    }

});