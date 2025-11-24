# FoodTrock

School project (Periode 3) – web app prototype for ordering food items with a simple cart and order flow. This README replaces the earlier workshop placeholder and documents the current structure and usage.

## Inhoudsopgave
1. Overzicht
2. Functionaliteiten
3. Technische Stack
4. Projectstructuur
5. Snel Starten
6. Gebruiksflow
7. Data & Storage
8. Verbeterideeën / Toekomst
9. Assets & Disclaimer

## 1. Overzicht
FoodTrock is een front‑end prototype (geen backend) waarmee gebruikers door een menu kunnen bladeren, producten kunnen bestellen, een winkelwagen/cart kunnen bekijken en uiteindelijk een orderoverzicht krijgen. Het project is opgebouwd in losse pagina mappen (HoofdPagina, Menu, BestelPagina, CartPagina, OrderPagina) en gebruikt eenvoudige JavaScript + jQuery.

## 2. Functionaliteiten
- Hoofdpagina met navigatie naar andere delen.
- Menu weergave (producten laden; mogelijkheid om selectie op te slaan in session storage / variabelen).
- Bestelpagina voor het kiezen van items en ophaaltijd.
- Winkelwagen (Cart) pagina voor overzicht en aanpassingen.
- Order details pagina voor bevestiging en afronding.
- Simpele toggle/slide menu (`SlideToggleMenu.js`).

## 3. Technische Stack
- HTML5 / CSS3
- JavaScript (Vanilla) + jQuery (`lib/jquery-3.7.1.min.js`)
- Geen bundler / framework; alles draait via statische bestanden.

## 4. Projectstructuur
```
FoodTrock/
	HeaderFooter.css
	SlideToggleMenu.js
	README.md
	Img/
		gallery/
		logo/
	JS/
		Ophaaltijd.Js
		Order.js
	lib/
		jquery-3.7.1.min.js
	HoofdPagina/
		Hoofd.html
		Hoofd.css
	Menu/
		MenuMain.html
		MenuMain.css
		MenuSessionStorage.js
	BestelPagina/
		BestelPagina.html
		BestelPagina.css
		BestelPagina.js
	CartPagina/
		Cart.html
		Cart.css
		Cart.js
	OrderPagina/
		Order.html
		Order.css
		OrderDetails.js
```

## 5. Snel Starten
1. Clone of kopieer de repository naar je lokale machine.
2. Open de map `FoodTrock` in VS Code.
3. Open `HoofdPagina/Hoofd.html` in je browser (dubbelklik of via een kleine lokale server).

Optioneel kun je een eenvoudige lokale server gebruiken (dit kan handig zijn voor relative paths):

PowerShell (Windows):
```
python -m http.server 8000
```
Daarna navigeer naar: `http://localhost:8000/HoofdPagina/Hoofd.html`

## 6. Gebruiksflow
1. Start op de hoofdpagina.
2. Ga naar het menu om producten te bekijken / selecteren.
3. Ga naar de bestelpagina om aantallen / ophaaltijd te kiezen.
4. Controleer de winkelwagen (Cart) en pas toe indien nodig.
5. Ga naar de orderpagina om de details te bevestigen.

## 7. Data & Storage
- Mogelijk gebruik van `sessionStorage` in `MenuSessionStorage.js` voor tijdelijke opslag van geselecteerde items.
- Geen permanente database of backend; alle data gaat verloren bij sluiten van de browser sessie.
- `Ophaaltijd.Js` regelt selectie of validatie van afhaal / pickup tijd.

## 8. Verbeterideeën / Toekomst
- Toevoegen van een eenvoudige backend (Node/Express of Firebase) voor persistente orders.
- Validatie en form feedback verbeteren.
- Responsive design uitbreiden (mobiele optimalisaties).
- Productdata extern JSON bestand i.p.v. hardcoded.
- Meertaligheid (NL/EN switch).
- Accessibility (ARIA, focus states) verbeteren.

## 9. Assets & Disclaimer
- Afbeeldingen in `Img/` zijn alleen voor demo/educatieve doeleinden.
- Dit project is een schoolopdracht; geen production readiness gegarandeerd.

## Bijdragen
Omdat dit een schoolproject is, zijn externe bijdragen niet primair bedoeld. Wil je toch voorstellen doen, maak dan een issue of pull request met een duidelijke omschrijving.

## Licentie
Educatief gebruik. Voeg zelf een formele licentie toe (bijv. MIT) indien je het verder wilt verspreiden.

---
Laat weten als je een extra sectie wilt (bijv. teststrategie of wireframes). Veel succes!