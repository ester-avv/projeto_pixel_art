function colorThePallete() {
  let blackColor = document.getElementsByClassName('color')[0];
  blackColor.style.backgroundColor = 'black';

  let yellowColor = document.getElementsByClassName('color')[1];
  yellowColor.style.backgroundColor = 'yellow'

  let redColor = document.getElementsByClassName('color')[2];
  redColor.style.backgroundColor = 'red'

  let blueColor = document.getElementsByClassName('color')[3];
  blueColor.style.backgroundColor = 'blue'

}
window.onload = colorThePallete;