let is24Hour = false;


// =========================
// DIGITAL CLOCK
// =========================

function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");


    let ampm = "";

    if (!is24Hour) {

        ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }

    }


    hours = String(hours).padStart(2, "0");


    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;


    document.getElementById("ampm").textContent =
        is24Hour ? "24-HOUR FORMAT" : ampm;


    const date = now.toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );


    document.getElementById("date").textContent = date;
}


updateClock();

setInterval(updateClock, 1000);


// =========================
// 12 / 24 HOUR BUTTON
// =========================

document
    .getElementById("formatBtn")
    .addEventListener("click", function () {

        is24Hour = !is24Hour;

        updateClock();

    });


// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("light");


        if (
            document.body.classList.contains("light")
        ) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    }
);