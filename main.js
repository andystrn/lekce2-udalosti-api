// tady je místo pro náš program

console.log("Ahoj")

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
}
