// I'm not converting numbers to string in this code

function reverse(param) {
	if (typeof param === "string") {
		let reversedParam = "";
		for (const char of param) {
			reversedParam = char +reversedParam;
		}
		return reversedParam;
	} else {
		let reversedParam = 0;
		while (param > 0){
			reversedParam = reversedParam * 10 + (param % 10);
			param = Math.floor(param * 0.1);
		}
		return reversedParam;
	}
}

console.log(reverse("Yasin")); // ---> nisaY
console.log(reverse(4590)); // ---> 954