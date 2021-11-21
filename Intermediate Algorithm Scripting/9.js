function uniteUnique(arr1, arr2, arr3) {
	var finalArray = [];

	for (var i = 0; i < arguments.length; i++) {
		var arrayArguments = arguments[i];

		for (var j = 0; j < arrayArguments.length; j++) {
			var indexValue = arrayArguments[j];

			if (finalArray.indexOf(indexValue) < 0) {
				finalArray.push(indexValue);
			}
		}
	}

	return finalArray;
}

