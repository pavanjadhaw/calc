const output = document.getElementById('output');

const solve = () => (output.innerHTML = eval(output.innerHTML));
const display = value => output.innerHTML == 0 ? (output.innerHTML = value): (output.innerHTML += value);

document.addEventListener('click', event => {
  event.target.matches('.btn') && display(event.target.dataset.keyValue);
  event.target.matches('.equals') && solve();
  event.target.matches('.clear') && (output.innerHTML = '0');
});
