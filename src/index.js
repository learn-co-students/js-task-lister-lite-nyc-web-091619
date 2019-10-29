document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let deleteTask = function(event) {
    let deleteMe = event.target.parentNode
    deleteMe.parentNode.removeChild(deleteMe)
  }

  let submitTask = function(event) {

    //find parent
    let parent = event.target.parentNode // form 

    // Read the input field and assign to a variable. Then reset input field to blank
    let inputField = parent.querySelector("input#new-task-description")
    let input = inputField.value
    inputField.value = ""

    //Find the <ul> item to ad this new task to
    let todo = document.getElementById("tasks")

    //Create the new task and append it
    let li = document.createElement("li") 
    li.innerText = input 
    todo.appendChild(li)

    //Create delet button, append it to child, then add event listener
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    todo.appendChild(deleteButton)


    deleteButton.addEventListener("click", deleteTask)

    

  }


  //Add event listener to form to disable page refresh
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event){
    event.preventDefault()
  });

  // Add event listener to submit button
  submitButton = document.getElementById("submit")
  submitButton.addEventListener("click", submitTask)



});