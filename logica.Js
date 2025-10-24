function liveScreen (valor) {
document.getElementById('result').value+=valor
}

function calculate(){
   let pantalla = document.getElementById('result')
   try {
    pantalla.value = eval(pantalla.value);
   } catch (error) {
    pantalla.value = 'Error'
   } 
}
