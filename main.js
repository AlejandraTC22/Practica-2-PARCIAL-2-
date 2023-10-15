import { NumberSeparator } from './SeparadorNumeros.js';

const generateButton = document.getElementById('generateButton');
const evenList = document.getElementById('evenList');
const oddList = document.getElementById('oddList');

generateButton.addEventListener('click', () => 
{
    const separator = new NumberSeparator();
    const numbers = separator.generateRandomNumbers(20); // Cambia el número de números aleatorios según sea necesario
    const { even, odd } = separator.separateNumbers(numbers);

    evenList.innerHTML = '';
    oddList.innerHTML = '';

    even.forEach((number) => 
    {
        const li = document.createElement('li');
        li.textContent = number;
        evenList.appendChild(li);
    });

    odd.forEach((number) => 
    {
        const li = document.createElement('li');
        li.textContent = number;
        oddList.appendChild(li);
    });
});
