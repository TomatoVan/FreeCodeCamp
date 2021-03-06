function pairElement(str) {
	var paired = [];

	let search = function(char) {
		switch (char) {
			case "A":
				paired.push(["A", "T"]);
				break;
			case "T":
				paired.push(["T", "A"]);
				break;
			case "C":
				paired.push(["C", "G"]);
				break;
			case "G":
				paired.push(["G", "C"]);
				break;
		}
	};

	for (let i = 0; i < str.length; i++) {
		search(str[i]);
	}

	return paired;
}

