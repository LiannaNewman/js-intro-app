var total = 0;
var colors = ["blue", "red", "orange", "yellow", "green", "purple"];

function jackhammer(box) {
  total++;
  box.style["background-color"] = colors[total];
  console.log(total);
}

  // if (total === 1) {
  //   box.style["background-color"] = "red" };
  // else if (total === 2) {
  //   box.style["background-color"] = "orange"};
  // else if (total === 3) {
  //   box.style["background-color"] = "blue"};
  // else if (total === 4) {
  //   box.style["background-color"] = "green"};
  // else if (total === 5) {
  //   box.style["background-color"] = "purple"};
  //   alert("You win!");
  // else {
  //   box.style["background-color"] = "yellow"};
  //   }
  // console.log(box)
  // }
