// an algorithm for reversing a given string or number ex1

function reverse(param) {
  /* Gets a parameter, converts it to string if it's number, reverses the parameter using
    loops and slicing method, stores it into a variable called reversedparam 
    and eventually returns reversedparam */

  if (typeof param === "number") {
    param = param.toString();
  }
  let reversedparam = "";
  for (let i = param.length - 1; i >= 0; i--) {
    reversedparam += param[i];
  }
  return reversedparam;
}

console.log(reverse("Yasin")); // ---> nisaY
console.log(reverse(4590)); // ---> 0954
