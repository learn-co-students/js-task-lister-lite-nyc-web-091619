document.addEventListener("DOMContentLoaded", () => {
  let submit = document.querySelector("input[type=submit]")
  console.log(submit)
  let task = document.getElementById("tasks")
  submit.addEventListener('click', function(e) {
    console.log(e)
  e.preventDefault()
  let li = document.createElement("li")
  task.appendChild(li)
  let text = document.getElementById("new-task-description").value
  li.innerText = text
  
});

});
