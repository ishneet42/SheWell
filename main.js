var weight, height, measure, bmi, bmr, age, error;

function calculate1() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight / height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = `<h2 class="result-text">Your BMI is ${bmi} which means you are Underweight</h2>`;
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = `<h2 class="result-text">Your BMI is ${bmi} which means you are Normal weight</h2>`;
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = `<h2 class="result-text">Your BMI is ${bmi} which means you are Overweight</h2>`;
	} else if (bmi >= 30) {
		measure = `<h2 class="result-text">Your BMI is ${bmi} which means you are Obese</h2>`;
	}

	if (weight === 0) {
		document.getElementById("results1").innerHTML = error;
	} else if (height === 0) {
		document.getElementById("results1").innerHTML = error;
	} else {
		document.getElementById("results1").innerHTML = measure;
	}

	if (weight < 0) {
		document.getElementById("results1").innerHTML = "Negative values not allowed";
	}
}

function calculate2() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	age = document.getElementById("age").value;
	error = "Please enter some values";
	height *= 3.098;
	weight *= 9.247;
	age *= 4.330;
	bmr = 447.593 + weight + height - age;
	bmr = bmr.toFixed(1);
	console.log(typeof bmr)
	measure = `<h2 class="result-text">Your Daily Calorie Intake is ${bmr}</h2>`;

	if (weight === 0) {
		document.getElementById("results2").innerHTML = error;
	} else if (height === 0) {
		document.getElementById("results2").innerHTML = error;
	} else if (age === 0) {
		document.getElementById("results2").innerHTML = error;
	} else {
		document.getElementById("results2").innerHTML = measure;
	}

	if (weight < 0) {
		document.getElementById("results2").innerHTML = "Negative values not allowed";
	}
}
