document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelector("input[type=submit]")
  let ul = document.getElementsByTagName("ul")[0]
  submit.addEventListener("click", function(e){
    let input = document.getElementById("new-task-description").value
    li = document.createElement("li")
    li.innerText = `${input}`
    delete_button = document.createElement("button")
    delete_button.innerText = "X"
    li.appendChild(delete_button)
    ul.appendChild(li)
    e.preventDefault()
  })

})
