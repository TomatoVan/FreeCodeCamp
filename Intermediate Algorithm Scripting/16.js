function binaryAgent(str) {
	let biString = str.split(" ");
	let uniString = [];



	for (let i = 0; i < biString.length; i++) {
		uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
	}

	return uniString.join("");
}