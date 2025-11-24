document.addEventListener("DOMContentLoaded", () => {
    // Controleer of sessionStorage "orderId" bevat en het een waarde heeft
    if (sessionStorage.getItem("orderId")) {
        const orderId = sessionStorage.getItem("orderId");
        console.log(`OrderId gevonden: ${orderId}`);

        // Selecteer het nav-element
        const nav = document.querySelector("nav");

        // Maak een nieuw anker-element voor de bestelknop
        const orderButton = document.createElement("a");
        orderButton.id = "Bestelling";
        orderButton.href = "../OrderPagina/Order.html"; // Stel de href in naar de gewenste locatie
        orderButton.textContent = "Bestelling"; // Stel de tekstinhoud in voor de knop

        // Pas stijlen toe om overeen te komen met de menu-knop
        orderButton.style.textDecoration = "none";
        orderButton.style.height = "40px";
        orderButton.style.width = "100px";
        orderButton.style.backgroundColor = "var(--secondary-color)";
        orderButton.style.display = "flex";
        orderButton.style.justifyContent = "center";
        orderButton.style.alignItems = "center";
        orderButton.style.borderRadius = "10px";
        orderButton.style.cursor = "pointer";
        orderButton.style.position = "absolute";
        orderButton.style.marginLeft = "5vw"; // Uitlijnen naar links
        orderButton.style.color = "white";
        orderButton.style.fontWeight = "bold";

        // Voeg de knop toe aan de nav
        nav.insertBefore(orderButton, nav.firstChild);
    }
});