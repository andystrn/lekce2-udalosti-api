// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;
function priNajetiNaCtverec() {
    console.log("test" + pocitadlo);
    //pocitadlo = pocitadlo + 1;
    pocitadlo++;
}

function zmenStyl() {
    nadpis.classList.toggle("zeleny");
}

let odstavec = document.querySelector('p');
odstavec.style.fontSize = '16px';

function poNajetiMysi() {
   odstavec.classList.toggle('tucnePismo');
   //odstavec.style.fontWeight = "bold";
}

function zmenaBarvy() {
    odstavec.classList.toggle('cervenePismo');
}


function ziskejVelikost () {
    let element = document.getElementById("text");
    let velikostOdstavce = window.getComputedStyle(element, null).getPropertyValue("font-size");
    return parseInt(velikostOdstavce);
}

let velikostTextu = ziskejVelikost();

function zvetsVelikost() {
    odstavec.style.fontSize = (velikostTextu + 1) + "px";
    velikostTextu++;
}

function stiskKlavesy(udalost) {
    console.log(udalost.key);
}

let audioFile = document.getElementById('zvukovaStopa'); 

function startAudio() {
    audioFile.play();
}

function pauseAudio() {
    audioFile.pause();
}

function volumeDown() {
    audioFile.volume = 0;
}

function volumeMiddle() {
    audioFile.volume = 0.5;
}

function volumeMax() {
    audioFile.volume = 1;
}

function naZacatek() {
    audioFile.currentTime = 0;
}