function colorThePallete() {
  const blackColor = document.getElementsByClassName('color')[0];
  blackColor.style.backgroundColor = 'black';

  const yellowColor = document.getElementsByClassName('color')[1];
  yellowColor.style.backgroundColor = 'yellow';

  const redColor = document.getElementsByClassName('color')[2];
  redColor.style.backgroundColor = 'red';

  const blueColor = document.getElementsByClassName('color')[3];
  blueColor.style.backgroundColor = 'blue';
}

function addClass() {
  let addSelectedClass = document.getElementsByClassName('color')[0];
  addSelectedClass.classList.add('selected');
}
addClass();

function changeSelected(event) {
  let firstSelected = document.getElementsByClassName('selected')[0];
  firstSelected.classList.remove('selected');
  event.target.classList.add('selected');

  let newSelected = document.getElementsByClassName('selected')[0];
  return newSelected;
}

let colorArray = document.querySelectorAll('.color');
console.log(colorArray);

for (let index = 0; index < colorArray.length; index += 1) {
  colorArray[index].addEventListener('click', changeSelected)
}

function colorPixel(event) {
  let activeColor = document.getElementsByClassName('selected')[0];
  let pickedColor = window.getComputedStyle(activeColor).backgroundColor;
  event.target.style.backgroundColor = pickedColor;
  return pickedColor;
}

let pixelArray = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelArray.length; index += 1) {
  pixelArray[index].addEventListener('click', colorPixel)
}

function clearAll(event) {
  for (let i=0; i<pixelArray.length; i+=1){
    pixelArray[i].style.backgroundColor = 'white';
  }
 
}

let button = document.getElementById('clear-board');

console.log(button);
button.addEventListener('click', clearAll);

function numberOfPixels (event){
  

}


window.onload = function all() {
  colorThePallete();
  addClass();
}
