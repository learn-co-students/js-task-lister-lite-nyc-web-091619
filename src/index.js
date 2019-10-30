document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelector("input[type=submit]")
  let ul = document.getElementsByTagName("ul")[0]
  
  let deletePressed = el => {
    let parent = el.target.parentNode
    parent.remove()
    
  }

  let submitClick = e => {
    let input = document.getElementById("new-task-description")
    li = document.createElement("li")
    li.innerText = `${input.value}`
    delete_button = document.createElement("button")
    delete_button.innerText = "X"
    li.appendChild(delete_button)
    ul.appendChild(li)
    
    delete_button.addEventListener("click", deletePressed)
    input.value = ''
    e.preventDefault()
  }
  
  submit.addEventListener("click", submitClick)
  


})
