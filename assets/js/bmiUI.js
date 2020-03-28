const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(weightInput.value, heightInput.value)
    let message = getBMIClassification(results)
    let displayReslutsElement = document.getElementById('results')
    if (message === "Underweight" || message === "Healthy" || message === "Overweight"){
    displayReslutsElement.innerHTML = `<h2> Your BMI value is: ${results} and you are ${message}</h2><br><h3>but life is too short so eat a burger and be happy!</h3><img src="./assets/images/burger.jpg" alt="Eat Burgers">`;
    }else {
        displayReslutsElement.innerHTML = `<h2> Your BMI value is: ${results} and you are ${message}</h2>`
    }
}

document.getElementById('height').onkeypress=function(e){
    if(e.keyCode==13){
        document.getElementById('Calculate').click();
    }
}


   

