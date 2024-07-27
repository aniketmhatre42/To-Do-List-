function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task Aniket.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <span>${taskText}</span>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function toggleTask(checkbox) {
    const taskItem = checkbox.parentElement;
    const taskText = taskItem.querySelector('span');
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span');
    const newTaskText = prompt('Edit task:', taskText.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskText.textContent = newTaskText;
    }
}
