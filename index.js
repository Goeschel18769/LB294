function startingPage() {
  document.getElementById("content").innerHTML =
    '<header>Wilkommen beim Stadt-Land-FLuss Helper</header> <main> <button onclick="navigateToMainPage()"> Start </button> <button onclick="login()"> Login </button> </main> <footer>Macher dieser tollen Webseite: Joël Haldimann</footer>';
}

function login() {
  document.getElementById("content").innerHTML =
    '<h1>Hoppla da wurde wohl noch nichts programmiert.</h1> <button onclick="startingPage()"> Zurück zur Startseite </button>';
}

function favourites() {
  document.getElementById("content").innerHTML =
    '<h1>Hoppla da wurde wohl noch nichts programmiert.</h1> <button onclick="navigateToMainPage()"> Zurück zur Hauptseite </button>';
}

function navigateToMainPage() {
  document.getElementById("content").innerHTML =
    '<header> <h1 id="titel">Stadt Land Fluss Helper</h1> </header> <nav> <label for="buchstabe">Buchstabe: </label> <input type="text" id="buchstabe" maxlength="1" placeholder="Gib einen Buchstaben ein"> <button onclick="anzeigen()">Anzeigen</button> <button onclick="favourites()">Favoriten</button> </nav> <main> <p id="ergebnis"></p> </main>  <footer>Macher dieser tollen Webseite: Joël Haldimann</footer>';
}

function anzeigen() {
  const buchstabe = document.getElementById("buchstabe").value.toLowerCase();
  const ergebnisElement = document.getElementById("ergebnis");

  fetch("https://slftool.github.io/data.json")
    .then((response) => response.json())
    .then((apiData) => {
      if (apiData[buchstabe]) {
        const zufaelligeElemente = {
          stadt: zufaelligesElement(apiData[buchstabe].stadt),
          land: zufaelligesElement(apiData[buchstabe].land),
          fluss: zufaelligesElement(apiData[buchstabe].fluss),
          name: zufaelligesElement(apiData[buchstabe].name),
          beruf: zufaelligesElement(apiData[buchstabe].beruf),
          tier: zufaelligesElement(apiData[buchstabe].tier),
          marke: zufaelligesElement(apiData[buchstabe].marke),
          pflanze: zufaelligesElement(apiData[buchstabe].pflanze),
        };

        ergebnisElement.innerHTML = `<p>Stadt: ${zufaelligeElemente.stadt}</p>
                                             <p>Land: ${zufaelligeElemente.land}</p>
                                             <p>Fluss: ${zufaelligeElemente.fluss}</p>
                                             <p>Name: ${zufaelligeElemente.name}</p>
                                             <p>Beruf: ${zufaelligeElemente.beruf}</p>
                                             <p>Tier: ${zufaelligeElemente.tier}</p>
                                             <p>Marke: ${zufaelligeElemente.marke}</p>
                                             <p>Pflanze: ${zufaelligeElemente.pflanze}</p>`;
      } else {
        ergebnisElement.innerHTML =
          "<p>Keine Daten für den eingegebenen Buchstaben vorhanden.</p>";
      }
    })
    .catch((error) => {
      console.error("Fehler beim Laden der API-Daten:", error);
      ergebnisElement.innerHTML = "<p>Fehler beim Laden der API-Daten.</p>";
    });
}

function zufaelligesElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
