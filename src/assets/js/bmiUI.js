const caculateBMI = () => {
    let weightInput = document.getElementById("weight");
    let heightInput = document.getElementById("height");
    let results = calculateMetricBMI(weightInput.nodeValue, heightInput.value);
    let displayReslutsElement = document.getElementById('results');
    displayReslutsElement.innerHTML = `<h1> Your BMI value is: ${results}</h1>`
}