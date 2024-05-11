function addGoal() {
    // Get the input value
    var goalInput = document.getElementById("goalInput");
    var goalText = goalInput.value;

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = goalText;

    // Append the new item to the goal list
    var goalList = document.getElementById("goalList");
    goalList.appendChild(li);

    // Clear the input field
    goalInput.value = "";
}
