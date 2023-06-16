
const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#currency-select")
const inputResult = document.querySelector(".input-result")
const inputResutToConvert = document.querySelector(".input-result-to-convert")

convertButton.addEventListener("click", convertValues)

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-value").value
    const dolarToday = 4.9
    const euroToday = 5.3

    if (currencySelect.value == "dolar") {
        inputResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        inputResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    inputResutToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

currencySelect.addEventListener("change", changeCurrency)

function changeCurrency() {
    const labelFlag = document.getElementById("label-flag")
    const currencyFlag = document.getElementById("currency-flag")

    if (currencySelect.value == "dolar") {
        labelFlag.innerHTML = "Dólar",
            currencyFlag.src = "./assets/usa-flag.png"
    }

    if (currencySelect.value == "euro") {
        labelFlag.innerHTML = "Euro",
            currencyFlag.src = "./assets/euro-flag.png"
    }

    convertValues()
}

