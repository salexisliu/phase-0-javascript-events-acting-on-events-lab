// Your code here
// function moveLeft(){
//  if (dodger.style.left > "0px") {
// dodger.style.left = parseInt(dodger.style.left, 10)-10 +'px';
//  }
// }


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const pos = parseInt(leftNumbers, 10);
  if (pos > 0) {
  dodger.style.left = `${pos - 1 }px`;
}
} 


function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const pos = parseInt(rightNumbers, 10);
  if (pos < 360) {
    dodger.style.left = `${pos + 10}px`;
  }
}

function moveDodgerUp() {
  const upNumbers = dodger.style.bottom.replace("px", "");
  const pos = parseInt(upNumbers, 10);

  if (pos < 380)  {
    dodger.style.bottom = `${pos + 10}px`;
  }

 
} 

function moveDodgerDown() {
  const downNumbers = dodger.style.bottom.replace("px", "");
  const pos = parseInt(downNumbers, 10);

  if (pos >= 10) {
    dodger.style.bottom = `${pos - 10}px`;
  }
 
} 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}); 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
}); 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
}); 
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
}); 