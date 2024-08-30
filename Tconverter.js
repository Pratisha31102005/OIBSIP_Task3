function convertTemperature() {
    let temp = document.getElementById("inputTemperature").value;
    let unit = document.getElementById("inputUnit").value;
    let result;

    if (unit === "Celsius") {
        result = (temp * 9/5) + 32;
        document.getElementById("result").innerHTML = ${temp} °C is ${result.toFixed(2)} °F;
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById("result").innerHTML = ${temp} °F is ${result.toFixed(2)} °C;
    }
}