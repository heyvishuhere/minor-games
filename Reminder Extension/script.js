let textEnter = document.querySelector("#to-do");
let timeEnter = document.querySelector("#limit");
let taskEnter = document.querySelector("#click");
let listofTask = document.querySelector("#task");
let listofTime = document.querySelector("#list-time");

const currentTime = () =>
{
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let formatTime = hours + ':' + minutes ;
    return formatTime; 
}

let time = currentTime();

const  addTask = (textEnter) =>
{
    let listItem = document.createElement("li");
    listItem.textContent = textEnter ;
    listofTask.appendChild(listItem);
}
const  addTime = (timeEnter) =>
{
    let listItem = document.createElement("li");
    listItem.textContent = timeEnter ;
    listofTask.appendChild(listItem);
}

taskEnter.addEventListener("click", ()=>
{
    addTask(textEnter.value);
    addTime(timeEnter.value);
    // checkTime(timeEnter.value,currentTime());
})

const checkTime = (timeEnter,time) =>
{
    if(timeEnter.value === time)
    {
        alert("Time is up");
    }
}