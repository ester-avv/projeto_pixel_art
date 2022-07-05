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
window.onload = colorThePallete;
