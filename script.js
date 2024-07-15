document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
  
    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        addTaskItemListeners(taskItem);
      }
    }
  
    function addTaskItemListeners(taskItem) {
      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '❌';
      deleteBtn.className = 'delete-btn';
      taskItem.appendChild(deleteBtn);
  
      deleteBtn.addEventListener('click', () => {
        taskItem.remove();
      });
    }
  });
  
