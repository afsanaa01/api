let searchButton = document.querySelector("button")
let timesTable = document.querySelector(".times")
let date = document.querySelector(".date")
let year = document.querySelector(".year")
let month = document.querySelector(".month")
let longitude = document.querySelector(".longitude")
let latitude = document.querySelector(".latitude")
let heads = document.querySelector(".heads")
let heads1 = document.querySelector(".heads1")
let error = document.querySelector(".error")
let info = document.querySelector(".info")


searchButton.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.onload = function () {
        heads1.classList.remove("d-none")
        date.innerText = "Monthly Prayer Times of" + " " + year.value;
        heads.classList.remove("d-none")
        let prayerData = JSON.parse(request.response).data


        for (const pr of prayerData) {
            var x = document.createElement("TBODY");
            var y = document.createElement("TR");
            var day = document.createElement("TD");
            var f = document.createElement("TD");
            var s = document.createElement("TD");
            var dh = document.createElement("TD");
            var a = document.createElement("TD");
            var m = document.createElement("TD");
            var i = document.createElement("TD");

            day.innerHTML = pr.date.readable
            f.innerHTML = pr.timings.Fajr
            s.innerHTML = pr.timings.Sunrise
            dh.innerHTML = pr.timings.Dhuhr
            a.innerHTML = pr.timings.Asr
            m.innerHTML = pr.timings.Maghrib
            i.innerHTML = pr.timings.Isha

            y.appendChild(day);
            y.appendChild(f);
            y.appendChild(s);
            y.appendChild(dh);
            y.appendChild(a);
            y.appendChild(m);
            y.appendChild(i);

            x.appendChild(y);
            document.getElementById("myTable").appendChild(x);
            longitude.value = ""
            latitude.value = ""
            month.value = ""
            year.value = ""
        }
    }

    request.open("get", "http://api.aladhan.com/v1/calendar?latitude=" + latitude.value + "&longitude=" + longitude.value + "&method=2&month=" + month.value + "&year=" + year.value + "");
    request.send();
})
