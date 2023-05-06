const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  if (celsiusInput.value !== "") {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitTemp.toFixed(2);
  } else if (fahrenheitInput.value !== "") {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
    celsiusInput.value = celsiusTemp.toFixed(2);
  }
});
