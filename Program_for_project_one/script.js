const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adding a task to the list
   
function addTask() {
    const inputLength = inputBox.value.trim().length;

    // Check the character length
    if (inputLength < 3 || inputLength > 200) {
        alert("Your task must be between 3 and 200 characters!");
        return;
    }

    // Adding a task to the list
    let li = document.createElement("li");
    li.textContent = inputBox.value.trim();

    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);

    inputBox.value = "";
    saveData();
}

// Adding event listener to the list container for checking and deleting tasks

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
