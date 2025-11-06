

function liveScreen(valor) {
  console.log("Número presionado:", valor);
document.getElementById('result').value+=valor
}

document.addEventListener('keydown', function(e) {
  const validKeys = ['0','1','2','3','4','5','6','7','8','9',
                     '+','-','*','/','.'];

  if (validKeys.includes(e.key)) {
    liveScreen(e.key);
  } 
  else if (e.key === 'Enter') {
    calculate();
  } 
  else if (e.key === 'Backspace') {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
  } 
});

let calculoTerminado = false;

function liveScreen(value) {
  const pantalla = document.getElementById('result');

  if (calculoTerminado && !isNaN(value)) {
    pantalla.value = '';
    calculoTerminado = false;
  }

  pantalla.value += value;
}

function calculate() {
  const pantalla = document.getElementById('result');
  try {
    pantalla.value = eval(pantalla.value);
    calculoTerminado = true; 
  } catch (error) {
    pantalla.value = 'Error';
    calculoTerminado = true;
  }
}

function clearScreen() {
  document.getElementById('result').value = '';
  calculoTerminado = false;
}

