function getValidPickupTimes() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 11); // Minimaal 15 minuten in de toekomst
    now.setSeconds(0);
    now.setMilliseconds(0);

    const validTimes = [];
    const currentHour = now.getHours();
    let currentMinutes = now.getMinutes();

    // Eerstvolgende geldige tijd bepalen
    if (currentMinutes <= 15) {
        currentMinutes = 15;
    } else if (currentMinutes <= 30) {
        currentMinutes = 30;
    } else if (currentMinutes <= 45) {
        currentMinutes = 45;
    } else {
        currentMinutes = 0;
        now.setHours(currentHour + 1);
    }

    // Genereer beschikbare tijden voor de rest van de dag
    for (let hour = now.getHours(); hour < 24; hour++) {
        [0, 15, 30, 45].forEach((minute) => {
            if (hour === now.getHours() && minute < currentMinutes) return;
            validTimes.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
        });
    }

    return validTimes;
}

function populatePickupTimes() {
    const select = document.getElementById("pickup-time");
    select.innerHTML = ""; // Leegmaken van de dropdown
    const times = getValidPickupTimes();

    times.forEach(time => {
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        select.appendChild(option);
    });
}

// Laad beschikbare tijden in bij het laden van de pagina
document.addEventListener("DOMContentLoaded", populatePickupTimes);