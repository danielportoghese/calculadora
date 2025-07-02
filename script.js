const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');
        if (value) {
            display.value += value;
        }
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

equalsButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
});
