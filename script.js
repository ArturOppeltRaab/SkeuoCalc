const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Erro";
      }
    } else if (button.textContent === 'C') {
      display.textContent = '';
    } else {
      if (display.textContent === '0') {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    }
  });
});
