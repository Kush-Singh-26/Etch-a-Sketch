const container = document.querySelector("#container");
const button = document.querySelector("button");
let size;
let mouseDown = false;
const input = document.querySelector("#input");
button.addEventListener('click', getValue);
function getValue() {
  size = input.value;
  deleteGrid();
  createGrid(size, size);

}
let mousedown = false;
document.body.onmousedown = () => (mousedown = true);
document.body.onmouseup = () => (mousedown = false);
function createGrid(row, col) {
  for (let i = 1; i <= row * col; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = (400 / row) + 'px';
    pixel.style.height = (400 / col) + 'px';
    pixel.style.backgroundColor = "#f5f5f5";
    pixel.addEventListener('mouseover', colorChange);
    pixel.addEventListener('mousedown', colorChange);
    container.appendChild(pixel);
  }
  colorChange();
}

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function colorChange(e) {
  if (e.type === 'mouseover' && !mousedown) return;
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}