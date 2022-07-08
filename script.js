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

function changeSelected (event) {
  let firstSelected = document.getElementsByClassName('selected')[0];
  firstSelected.classList.remove('selected');

  event.target.classList.add('selected');
}

let colorArray = document.querySelectorAll('.color');
console.log(colorArray);

for (let index = 0; index < colorArray.length; index += 1) {
  colorArray[index].addEventListener('click', changeSelected)
  }

/* function changeColor() {

  let firstSelected = document.getElementsByClassName('selected')[0];
  firstSelected.classList.remove('selected');

 

} */

/* changeColor(); */


window.onload = function () {
  colorThePallete();
  addClass();
}