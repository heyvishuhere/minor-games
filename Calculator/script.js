let string = "";
let button = document.querySelectorAll(".box");
let result = document.querySelector(".output");

Array.from(button).forEach((button)=>
{
    button.addEventListener("click",(e)=>
    {
        if(e.target.innerText== "AC")
        {
            string = "";
            result.value=string;
        }
        else if (e.target.innerText == "="){
            string = eval(string);
            result.value=string;
        }
        else if (e.target.innerText == "C"){
            string = string.slice(0,-1);
            result.value=string;
        }
        else{
            string += e.target.innerText;
            result.value=string;
        }
    })
})