let n = 6;
let string = "";

for (let i = n; i >= 0; i--) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);