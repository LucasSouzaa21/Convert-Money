const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-Currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarHoje = 5.03;
  const euroHoje = 5.43;
  const libraHoje = 6.14;
  
  
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarHoje);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroHoje);
  }
  
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraHoje);
}




function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")


  if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }
  
  if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra 1.png"
  
  
    convertValues()
}

currencySelect.addEventListener("change" , changeCurrency);
convertButton.addEventListener("click", convertValues);
}
}