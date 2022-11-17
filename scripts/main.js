let str = 'Вычитание'
let a = 16
let b = 12
let c = a - b

function Main(a, b){
    console.log(a + b);
}

// Чётное и нечётное

function ChetNechet(a){

    if (a % 2 == 0){
        console.log('Чётное');
        return true;
    } else {
        console.log('Нечётное');
        return false;
    }

}

console.log(ChetNechet(a))

let input = document.querySelectorAll('input')
let inputexiblock = document.querySelectorAll('.main-input-text-blockerback')
let inputexitws = document.querySelectorAll('.main-input-textws')
let inputexitw = document.querySelectorAll('.main-input-textw')
let inputexith = document.querySelectorAll('.main-input-texth')
let inputexits = document.querySelectorAll('.main-input-texts')

function lock(){
    let obj = {
        name: input[0].value,
        age: input[1].value,
        telephone: input[2].value,
    }
    console.log(obj)
    // inputexitws[0].innerHTML = "Заявка отправлена" + '<br/>'
    inputexiblock[0].classList.toggle('none')
    inputexitw[0].innerHTML = input[0].value
    inputexith[0].innerHTML = input[1].value
    inputexits[0].innerHTML = input[2].value
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
}

let gos = document.querySelectorAll('.blocker')
let i = 0

for (let i = 0; i < 6; i++){
    function next() {
        gos[i].classList.toggle('go-none')
        i++
        gos[i].classList.toggle('go-none')
    }
}

for (let i = 0; i < 6; i--){
    function next() {
        gos[i].classList.toggle('go-none')
        i--
        gos[i].classList.toggle('go-none')
    }
}

console.log(input.length)