let otazky = [
  {
    otazka: "Kolika let se dožívá lama?",
    obrazek: "obrazky/lama1.jpg",
    odpovedi: ["5-8 let", "10-15 let", "20-25 let"],
    spravna: 2,
  },
  {
    otazka: "Jak se jmenuje terapie, při které se používá kontakt s lamami?",
    obrazek: "obrazky/lama2.jpg",
    odpovedi: ["Lamaterapie", "Argenoterapie", "Alpakoterapie"],
    spravna: 0,
  },
  {
    otazka: "Jak daleko doplivne lama?",
    obrazek: "obrazky/lama3.jpg",
    odpovedi: ["1 metr", "4 metry", "8 metrů"],
    spravna: 1,
  },
];

console.log(otazky);

let otazkaDiv = document.querySelector("#otazka");
let kviz = document.querySelector(".kviz");
let odpovediUl = document.querySelector("#odpovedi");
let kolikZobrazeno = 0;
function nacteniStranky() {
  nactiOtazku();
  vytvorVysledky();
}

let vysledky;

function vytvorVysledky() {
  vysledky = document.createElement("div");
  vysledky.id = "vysledky";
  kviz.appendChild(vysledky);
  let poradi = document.createElement("h2");
  poradi.id = "poradi";
  vysledky.appendChild(poradi);
  poradi.textContent = 'Tvoje hodnocení';
}

function nactiOtazku() {
  for (let i = 0; i <= 2; i = i + 1) {
    otazkaDiv.innerHTML = otazky[kolikZobrazeno].otazka;
    document.querySelector("#obrazek").src = otazky[kolikZobrazeno].obrazek;
    let data = document.querySelector(`${"#odpoved" + i}`);
    data.textContent = otazky[kolikZobrazeno].odpovedi[i];
    data.setAttribute("data-odpoved", i);
    console.log(otazky[kolikZobrazeno].odpovedi[i]);
  }
}

let indexOdpovedi;

let moznosti = document.querySelectorAll("li");
moznosti.forEach((moznost) => {
  moznost.addEventListener("click", function(moznost) {
    let moznostT = moznost.target;
    indexOdpovedi = parseInt(moznostT.dataset.odpoved);
    ulozVysledky();
    if (kolikZobrazeno <= 1) {
      kolikZobrazeno = kolikZobrazeno + 1;
      console.log(kolikZobrazeno);
      nactiOtazku();
    } else {
      otazkaDiv.style.display = "none";
      odpovediUl.style.display = "none";
      vysledky.style.display = "block";
      vysledky.style.width = "100%";
      document.querySelector("#obrazek").style.display = "none";
    }
  });
});

let pocetSpravnych = 0;

function ulozVysledky() {
  let otazkaText = document.createElement("p");
  otazkaText.style.fontWeight = 'bold';
  vysledky.appendChild(otazkaText);
  otazkaText.textContent =
    kolikZobrazeno + 1 + ". " + otazky[kolikZobrazeno].otazka;

  let tvojeOdpoved = document.createElement("p");
  vysledky.appendChild(tvojeOdpoved);
  tvojeOdpoved.textContent = 'Tvoje odpověď: ' + otazky[kolikZobrazeno].odpovedi[indexOdpovedi];

  let spravnost = document.createElement("p");
  vysledky.appendChild(spravnost);
  if (indexOdpovedi === otazky[kolikZobrazeno].spravna) {
    spravnost.textContent = 'To je SPRÁVNĚ.';
    pocetSpravnych = pocetSpravnych + 1;
  } else {
    let indexSpravneOdpovedi = otazky[kolikZobrazeno].spravna;
    spravnost.textContent = 'Správná odpověď: ' + otazky[kolikZobrazeno].odpovedi[indexSpravneOdpovedi];
  }

  if (kolikZobrazeno === 2) {
    let statistika = document.createElement("h2");
  vysledky.appendChild(statistika);
  statistika.style.color = '#ff0844';
  statistika.style.marginTop = '40px';
  let procenta = Math.floor(pocetSpravnych / otazky.length * 100)
  statistika.textContent = 'Správně ' + pocetSpravnych + ' ze ' + otazky.length + ' otázek. Úspěšnost ' + procenta + ' %.';
  }
  
}

