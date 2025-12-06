function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	const avg = +(sum / arr.length).toFixed(2);
	return {
		max: max,
		min: min,
		avg: avg
	};

}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let max = arr[0];
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		console.log(arr, 'i', i, arr[i]);
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let i;

	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) sumEvenElement += arr[i];
		else sumOddElement += arr[i];
	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let i;

	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let i;
	let res;
	let numbers;

	if (arrOfArr.length === 0) return 0;

	for (i = 0; i < arrOfArr.length; i++) {
		numbers = arrOfArr[i];
		res = func(...numbers);
		if (res > maxWorkerResult) maxWorkerResult = res;
	}

	return maxWorkerResult;

}