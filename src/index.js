document.addEventListener("DOMContentLoaded", () => {
  // your code here

let deleteTask = function(event) {
  let deleteMe = event.target.parentNode
  deleteMe.parentNode.removeChild(deleteMe)
}

let submitTask = function(event) {
  let parent = event.target.parentNode
  let deleteButton = document.createElement("button")
 
  let inputField = parent.querySelector("form input#new-task-description")
  let input = inputField.value
  inputField.value = ""
  let todo = document.getElementById("tasks")
  let li = document.createElement("li") 
  li.innerText = input 
  deleteButton.innerText = "X"
  todo.appendChild(li)
  todo.appendChild(deleteButton)
  deleteButton.addEventListener("click", deleteTask)

}

submitButton = document.querySelector("[data-id=submit]")

submitButton.addEventListener("click", submitTask)


});
