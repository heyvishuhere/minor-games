const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementsByClassName("result");

const apiKey = ""
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=INR"

convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
        headers: {
            'x-ApI-Key': apikey
        }
    })

        .then(response => response.json())
        .then(data => {
            const rate = data.rate;
            const result = amountTotal * rate;
            result.innerText = `${amount} ${currency} = ${result.toFixed(2)} INR`;
        })

        .catch(error => {
            console.error("Request failed",error);
            result.innerText ="Any error caused plz try again.";
        })

})