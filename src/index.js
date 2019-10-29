document.addEventListener('DOMContentLoaded', () => {
  // This will run once page is loaded
  // add click event to submit button
  const button = document.querySelector('input[type=submit]');
  const taskList = document.querySelector('#tasks');

  const editTaskItem = e => {
    const inputFieldValue = document.getElementById('new-task-description')
      .value;
    e.target.parentNode.innerText = inputFieldValue;
  };

  const removeTaskItem = e => {
    e.target.parentNode.remove();
  };

  const clickHandler = e => {
    // prevents form submission
    e.preventDefault();

    // capturing input field value
    const inputFieldValue = document.getElementById('new-task-description')
      .value;
    const inputPriority = document.querySelector('select').value;

    // if input field contains no text, doesn't allow creating an empty task.
    if (inputFieldValue) {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');
      li.innerText = `${inputFieldValue}`;

      // Setting background colors depending on priority.
      switch (inputPriority) {
        case 'high': {
          li.style = 'color: red;';
          break;
        }
        case 'normal': {
          li.style = 'color: blue;';
          break;
        }
        case 'low': {
          li.style = 'color: green;';
          break;
        }
        default: {
          li.style = 'color: magenta;';
        }
      }

      deleteButton.dataset.description = `${inputFieldValue}`;
      deleteButton.innerText = 'X';

      editButton.dataset.description = `${inputFieldValue}`;
      editButton.innerText = 'Edit';

      deleteButton.addEventListener('click', removeTaskItem);
      editButton.addEventListener('click', editTaskItem);

      li.appendChild(deleteButton);
      li.appendChild(editButton);
      taskList.appendChild(li);
      document.getElementById('new-task-description').value = '';
    }
  };

  button.addEventListener('click', clickHandler);
});
