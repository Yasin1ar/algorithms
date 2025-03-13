// an algorithm for reversing a given string or number ex1

function reverse(param) {
  /* Gets a parameter, converts it to string if it's number, reverses the parameter using
    loops and slicing method, stores it into a variable called reversedParam 
    and eventually returns reversedParam */

  if (typeof param === "number") {
    param = param.toString();
  }
  let reversedParam = "";
  for (let i = param.length - 1; i >= 0; i--) {
    reversedParam += param[i];
  }
  return reversedParam;
}

console.log(reverse("Yasin")); // ---> nisaY
console.log(reverse(4590)); // ---> 0954
