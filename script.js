// Selecting DOM elements
const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Event listener for adding tasks
addTaskButton.addEventListener("click", addTask);

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task";

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="actions">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";

  // Add event listeners for edit and delete buttons
  const editButton = taskItem.querySelector(".edit-btn");
  const deleteButton = taskItem.querySelector(".delete-btn");

  editButton.addEventListener("click", () => editTask(taskItem));
  deleteButton.addEventListener("click", () => deleteTask(taskItem));
}

// Edit a task
function editTask(taskItem) {
  const taskText = taskItem.querySelector(".task-text");
  const newText = prompt("Edit your task:", taskText.textContent);
  if (newText !== null && newText.trim() !== "") {
    taskText.textContent = newText.trim();
  }
}

// Delete a task
function deleteTask(taskItem) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskList.removeChild(taskItem);
  }
}
