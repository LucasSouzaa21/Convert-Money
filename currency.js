const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

   function convertValues() {
      const inputCurrencyValue = document.querySelector(".input-Currency").value
      const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
      const currencyValueConverted = document.querySelector(".currency-value")
   
      
      const dolarHoje = 5.03
      const euroHoje = 5.43
        
      
      
      if(currencySelect.value == "dolar")
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency", 
          currency: "USD" 
         }).format(inputCurrencyValue / dolarHoje)
      }
     
      if(currencySelect.value == "euro")
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency", 
          currency: "EUR" 
         }).format(inputCurrencyValue / euroHoje)
      }
      
      if(currencySelect.value == "dolar"){
         currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency", 
          currency: "BRL" 
         }).format(inputCurrencyValue)
      }

      convertButton.addEventListener("click", convertValues)