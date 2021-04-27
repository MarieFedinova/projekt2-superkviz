let otazky = [
    {
    otazka: 'Otázka 1', 
    obrazek: 'obrazky/moncicak.jpg', 
    odpovedi: ['Odpověď 1', 'Odpověď 2', 'Odpověď 3'],
    spravna: 1 
    },
    {
        otazka: 'Otázka 2', 
        obrazek: 'obrazky/ovoce.jpg', 
        odpovedi: ['Odpověď 1', 'Odpověď 2', 'Odpověď 3'],
        spravna: 2 
    },
    {
        otazka: 'Otázka 3', 
        obrazek: 'obrazky/snehurka.jpg', 
        odpovedi: ['Odpověď 1', 'Odpověď 2', 'Odpověď 3'],
        spravna: 0 
    }
];

console.log(otazky);

otazkaDiv = document.querySelector('#otazka');

function nacteniStranky() {
    otazkaDiv.innerHTML = otazky[0].otazka;

otazky[0].odpovedi.forEach(pridejOdpoved)
function pridejOdpoved(odpoved) {
    let data = document.createElement('li');
    data.innerHTML = odpoved;
}

let obsah = document.createElement('ul');
    obsah.id = 'odpovedi';
    obsah.appendChild(data);
    otazkaDiv.appendChild(obsah);
}
