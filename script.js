document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const form = document.querySelector("form");
    const bmiValue = document.getElementById("bmi-value");
    const bmiCategory = document.getElementById("bmi-category");
    const bmiExplanation = document.getElementById("bmi-explanation");
    const resultContainer = document.querySelector(".result-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const height = parseFloat(heightInput.value) / 100;
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight) && height > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            bmiValue.textContent = bmi;
            resultContainer.style.display = "block";

            
            if (bmi < 18.5) {
                bmiCategory.textContent = "Underweight";
                bmiExplanation.textContent = "You may need to gain some weight. Consider a balanced diet.";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                bmiCategory.textContent = "Normal weight";
                bmiExplanation.textContent = "You are within a healthy weight range. Keep up the good work!";
            } else if (bmi >= 25 && bmi < 29.9) {
                bmiCategory.textContent = "Overweight";
                bmiExplanation.textContent = "You may need to lose some weight. Consider a healthy diet and exercise.";
            } else {
                bmiCategory.textContent = "Obese";
                bmiExplanation.textContent = "It's important to work on weight management for better health.";
            }
        } else {
            bmiValue.textContent = "N/A";
            bmiCategory.textContent = "";
            bmiExplanation.textContent = "Please enter valid height and weight.";
            resultContainer.style.display = "block";
        }
    });
});
