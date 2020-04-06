let xyz = document.getElementById('uuid');
let zyx = document.getElementsByClassName('galerijos_foto')[0];
let abc = document.querySelectorAll('.kita .kita_klase')[2];

xyz.innerHTML = 'Labas pasauli!';
zyx.src = '/img/off.png';
abc.style.backgroundColor = 'red';
abc.style.display = 'block';

console.log(xyz.innerHTML);
console.log(zyx.src);
console.log(abc.style.display);

//Suskaiciuoti kiek HTML faile yra <img> tagu. Rezultatas isvedamas konsoleje
let imgskaiciavimas = document.querySelectorAll('img').length;
let kiekText = console.log('Siame puslapyje yra' + imgskaiciavimas + 'paveiksleliai');

console.log(kiekText);

//Ta pati rezultata isvesti i elementa, kurio id="uuid". (pvz. "Siame puslapyje yra 7 paveiksleliai")
document.getElementById('uuid').innerHTML = kiekText;

//Paspaudus mygtuka, window alerte atspausdinti paveiksleliu kieki
// padaryta js_selektoriai.html faile

//kita uzduotis

let fotos = document.querySelectorAll('img:nth-child(2n)');

for (let i = 0; i < fotos.length; ++i){
    elem = fotos[i];
    elem.setAttribute("alt","Testas");
}

let uuid = document.getElementById('uuid');
let options = {"font-size": "24px",
            "background-color": "green",
            "width": "200px",
            "height": "200px",
};
// {font-size: 24px; background-color: green; width: 200px; height: 200px;}



//pirmas budas
uuid.style.fontSize = '24px';
uuid.style.backgroundColor = 'green';
uuid.style.width = '200px';
uuid.style.height = '200px';



