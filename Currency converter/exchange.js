const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementsByClassName("result");

const apiKey = "w+8wtQTmX8Yo9X+c4V00Hw==aj06XIqsU4Yhttgw"
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR"

convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log("Button clicked");

    fetch(url, {
        headers: {
            'x-ApI-Key': 'w+8wtQTmX8Yo9X+c4V00Hw==aj06XIqsU4Yhttgw'
        }
    })

        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultPrice = amountTotal * rate;
            result.innerText = `${amount} ${currency} = ${resultPrice.toFixed(2)} INR`;
        })

        .catch(error => {
            console.error("Request failed",error);
            result.innerText ="Any error caused plz try again.";
        })

})