var boxes = [];

function clickbox(number) {
  if (boxes.indexOf(number) === -1) {
    boxes.push(number);
  }
  console.log(boxes);
  if(boxes.length === 3 ) {
    alert("You win!");
  }
}
