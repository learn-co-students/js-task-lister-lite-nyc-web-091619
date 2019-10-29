document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // everntListener for the form when "submit" gets invoked
  // in eventListener 
  // form is submitted

  let submit = document.querySelector("input[type=submit]")
  let tasks = document.getElementById("tasks")
  let li = document.createElement("li")

  submit.addEventListener("click", function(e){
    let input = document.getElementById("new-task-description").value
    li = document.createElement("li")
    list = document.createElement("p")
    list.innerText = `${input}`
    li.appendChild(list)
    tasks.appendChild(li)
    e.preventDefault()
  })

})

// function clickHandler(e) {
//   let parent = e.target.parentNode.querySelector("h4 span")
//   let num = parseInt(parent.innerText)
//   num++
//   parent.innerText = num
//   console.log("clicking")
// }