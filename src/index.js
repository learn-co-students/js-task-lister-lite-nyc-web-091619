document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelector("input[type=submit]")
 

  let ul = document.getElementById("tasks")

  submit.addEventListener("click", function(e) {
    let userInput = document.getElementById("new-task-description").value
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.dataset.id = "deleteButton"
    button.innerText = "X"
    li.innerText = `${userInput}`
    li.appendChild(button)
    ul.appendChild(li)
    button.addEventListener("click",function(){
      li.remove()
     })
    e.preventDefault()
  })
  
