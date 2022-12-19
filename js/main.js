
function btn(){
    let input = document.querySelector('.input').value
    let elbtn = document.querySelector('.btn')
    let piyoda = document.querySelector('.piyodatezligi')
    let velosiped = document.querySelector('.velosipedtezligi')
    let mashina = document.querySelector('.moshinatezligi')
    let samalyot = document.querySelector('.samalyottezligi')

    let piyodacha = Math.trunc(input/4)
    let velosipedcha = Math.trunc( input/20)
    let mashinacha = Math.trunc( input/70)
    let samalyotcha =  Math.trunc(input/800)
    if (0<input){
        piyoda.innerHTML =  piyodacha
    }
    else{
        alert('Faqat son kiriting:!!!!!!')
    }
    if (0<input){
        velosiped.innerHTML = velosipedcha
    }
    else{
        alert('Faqat son kiriting:!!!!!!')
    }
    if (0<input){
        mashina.innerHTML = mashinacha
    }
    else{
        alert('Faqat son kiriting:!!!!!!')
    }
    if (0<input){
        samalyot.innerHTML = samalyotcha
    }
    else{
        alert('Faqat son kiriting:!!!!!!')
    }
}

var elInput = document.querySelector('.input')

input.addEventListener('keyup', function(evn){
    if(evn.target.value.length >=2){
        input.style.border = '2px solid green'
    }
    else{
        input.style.border = '2px solid red'
    }
})
