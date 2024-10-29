function bmi(weight, height) {
    // Правильный расчет BMI
    let bmiIndex = weight / (height * height);
    
    // Определение категории
    if (bmiIndex <= 18.5) {
    return 'Underweight';
    } else if (bmiIndex <= 25.0) {
    return 'Normal';
    } else if (bmiIndex <= 30.0) {
    return 'Overweight';
    } else {
    return 'Obese';
    }
}