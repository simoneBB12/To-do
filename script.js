// script.js
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    taskList.removeChild(taskItem);
  };

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.onclick = function() {
    taskItem.classList.toggle('completed');
  };

  taskItem.appendChild(deleteButton);
  taskItem.appendChild(completeButton);

  taskList.appendChild(taskItem);

  taskInput.value = '';
}
