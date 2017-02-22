var boxNumbers = [];
function threeBox(inputNumber) {
  if (boxNumbers.indexOf(inputNumber) === -1) {
    boxNumbers.push(inputNumber);
  }
  if (boxNumbers.length === 3) {
    alert("You have won!!!");
    boxNumbers = [];
  }
  console.log(boxNumbers);
}