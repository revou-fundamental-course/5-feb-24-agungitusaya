function convert() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9/5) + 32;
  
  document.getElementById("result-fahrenheit").innerHTML = fahrenheit.toFixed(2);
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("result-fahrenheit").innerHTML = "";
}

function reverse() {
  const celsiusContainer = document.getElementById("celsius-container");
  const fahrenheitContainer = document.getElementById("fahrenheit-container");
  
  // Tukar label dan input
  celsiusContainer.innerHTML = `
    <label for="fahrenheit">Masukkan suhu Fahrenheit:</label>
    <input type="number" id="fahrenheit" onkeyup="convertFahrenheit()">
  `;
  fahrenheitContainer.innerHTML = `
    <label for="result-celsius">Suhu Celcius:</label>
    <span id="result-celsius"></span>
  `;
  
  // Ubah fungsi konversi
  document.getElementById("fahrenheit").onkeyup = convertFahrenheit;
}

function convertFahrenheit() {
  const fahrenheit = document.getElementById("fahrenheit").value;
  const celsius = (fahrenheit - 32) * 5/9;
  
  document.getElementById("result-celsius").innerHTML = celsius.toFixed(2);
}
