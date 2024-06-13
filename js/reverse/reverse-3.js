// an algorithm for reversing a given string or number ex3

function reverse(param) {
    /* Gets a parameter, converts it to string if it's number, reverses the parameter using
        chain methods, and returns */
  
    if (typeof param === "number") {
      param = param.toString();
    }

    return param.split('').reverse().join('');
  }
  
  console.log(reverse("Yasin")); // ---> nisaY
  console.log(reverse(4590)); // ---> 0954
  