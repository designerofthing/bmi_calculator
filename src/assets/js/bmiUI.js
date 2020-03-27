const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(weightInput.value, heightInput.value)
    let message = getBMIClassification(results)
    let displayReslutsElement = document.getElementById('results')
    displayReslutsElement.innerHTML = `<h1> Your BMI value is: ${results} and you are ${message}</h1>`
}
