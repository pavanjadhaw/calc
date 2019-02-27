const output = document.getElementById('output');

const solve = () => (output.value = eval(output.value));
const display = value => (output.value += value);

document.addEventListener('click', (event) => {
  event.target.matches('.btn') ? display(event.target.dataset.keyValue) : false;
  event.target.matches('.equals') ? solve() : false;
  event.target.matches('.clear') ? (output.value = '') : false;
});
