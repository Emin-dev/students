$(document).ready(function () {
    $("#me").click(function (e) {
        e.preventDefault()
        function myel(myclass = "") {
            if (!$.trim($("#inputme").val()) == '') {
                let vall = $("#inputme").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line" > </div>')
                    , bigDiv = $(`<div ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return;
            }

        }
        $("#messageyou").append(myel())
        $("#messageme").append(myel('class="end"'))
        $("#inputme").val("")
        document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight);
        document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight);
    })
    $("#you").click(function (e) {
        e.preventDefault()
        if (!$.trim($("#inputyou").val()) == '') {
            myel = (myclass = "") => {
                let vall = $("#inputyou").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line" > </div>')
                    , bigDiv = $(`<div ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
        }
        else {
            return;
        }

        $("#messageyou").append(myel('class="end"'))
        $("#messageme").append(myel())
        $("#inputyou").val("")
        document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight);
        document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight);
    })



    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
            async function myweather() {
                const responce = await fetch(url)
                const data = await responce.json()
                $("#city").html(data.name);
                $("#temp").html(data.main.temp);
                $("#feels").html(data.main.feels_like);
                $("#myWeather").val("")
                console.log(data);
            }
            myweather()
        }
    });

    $("#city").click(function (e) {
        e.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=012d3a58b4fd8ab58c50576d8d087fc1&units=metric`
        async function myweather() {
            const responce = await fetch(url)
            const data = await responce.json()
            $("#city").html(data.name);
            $("#temp").html(data.main.temp);
            $("#feels").html(data.main.feels_like);
            $("#myWeather").val("")
            console.log(data);
        }
        myweather()
    });
})
