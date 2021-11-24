function orbitalPeriod(arr) {
	let GM = 398600.4418;
	let earthRadius = 6367.4447;
	let a = 2 * Math.PI;
	let newArr = [];

	let getOrbPeriod = function(obj) {
		let c = Math.pow(earthRadius + obj.avgAlt, 3);
		let b = Math.sqrt(c / GM);
		let orbPeriod = Math.round(a * b);
		// create new object
		return {name: obj.name, orbitalPeriod: orbPeriod};
	};

	for (let elem in arr) {
		newArr.push(getOrbPeriod(arr[elem]));
	}

	return newArr;
}