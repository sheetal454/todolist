const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Add this line to append the li to the list
        inputBox.value = ""; // Clear the input box after adding the task
    }
}
