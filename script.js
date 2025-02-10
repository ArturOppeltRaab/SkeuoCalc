const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function clearDisplay() {
  display.textContent = '0';
}

function clearLastEntry() {
    display.textContent = '0';
  }

function deleteLastCharacter() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === '' || isNaN(display.textContent)) {
    display.textContent = '0';
  }
}

function changeSignal() {
  display.textContent = (parseFloat(display.textContent) * -1).toString();
}

function squareRoot() {
  display.textContent = Math.sqrt(parseFloat(display.textContent)).toString();
}

function square() {
  display.textContent = (parseFloat(display.textContent) ** 2).toString();
}

function inverse() {
  display.textContent = (1 / parseFloat(display.textContent)).toString();
}

function convertToPercentage() {
  display.textContent = (parseFloat(display.textContent) / 100).toString();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Erro";
      }
    } else if (button.textContent === 'C') {
      clearDisplay();
    } else if (button.textContent === 'CE') {
      clearLastEntry();
    } else if (button.textContent === '←') {
      deleteLastCharacter();
    } else if (button.textContent === '±') {
      changeSignal();
    } else if (button.textContent === '√') {
      squareRoot();
    } else if (button.textContent === 'x²') {
      square();
    } else if (button.textContent === '1/x') {
      inverse();
    } else if (button.textContent === '%') {
      convertToPercentage();
    } else {
      if (display.textContent === '0') {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    }
  });
});
