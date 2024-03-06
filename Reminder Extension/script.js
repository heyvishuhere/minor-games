let inputText = document.querySelector("#work");
let inputTime = document.querySelector("#userTime");
let addTask = document.querySelector("#task");
let clickBtn = document.querySelector("#click");
let msg = document.querySelector("#time");


const inputTask = () => {
    let listItem = document.createElement("li");
    listItem.textContent = inputTime.value;
    addTask.appendChild(listItem);
    return {timeValue : inputTime.value};
}
function updateLiveTime()
{
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    var formatTime = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
    msg.innerText = formatTime;
    // checkTime();
}
setInterval(updateLiveTime,1000);
const checkTime = ()=>
{
    const { timeValue } = inputTask();
    if (timeValue === msg.innerText) {
        alert(`Time is Up for task:`);
    }
}
clickBtn.addEventListener("click", () => {
    // console.log("Hello World");
    // console.log(inputTask());
    // checkTime();
})