// an algorithm for reversing a given string or number ex2

function reverse(param) {
  /* Gets a parameter, converts it to string if it's number, reverses the parameter using
      loops and slicing method, stores it into a variable called reversedparam 
      and eventually returns reversedparam */

  if (typeof param === "number") {
    param = param.toString();
  }
  let reversedparam = "";
  for (let char of param) {
    reversedparam = char + reversedparam;
  }
  return reversedparam;
}

console.log(reverse("Yasin")); // ---> nisaY
console.log(reverse(4590)); // ---> 0954
