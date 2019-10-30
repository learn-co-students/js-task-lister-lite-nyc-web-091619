document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelector("input[type=submit]")
  let ul = document.getElementsByTagName("ul")[0]
  let sortButton = document.getElementById("sort")
  // function executed on the press of "X"
  let deletePressed = el => {
    let parent = el.target.parentNode
    parent.remove()
    
  }

  // function executed on the click of submit button
  let submitClick = e => {
    let color = document.getElementsByTagName("select")[0].value
    let input = document.getElementById("new-task-description")
  
    li = document.createElement("li")
  
    p_tag = document.createElement("p")
    p_tag.innerText = `${input.value}`
    p_tag.contentEditable = "true"
    p_tag.style.color = color
  
    delete_button = document.createElement("button")
    delete_button.innerText = "X"
  
    li.appendChild(p_tag)
    li.appendChild(delete_button)
    ul.appendChild(li)
  
    delete_button.addEventListener("click", deletePressed)
  
    input.value = ''
    e.preventDefault()
  }

  
  // Actual event listener
  submit.addEventListener("click", submitClick)
  sortButton.addEventListener("click", function(){
    let new_ul = document.createElement("ul")
    let ul = document.getElementsByTagName("ul")[0]
    // Get an array of all of the li elements in ul
    li_array = Array.from(ul.children)

    // Sort the li_array in descending order
    li_array.sort((a, b) => (a.children[0].style.color <= b.children[0].style.color) ? 1 : -1)

    // Add them into the ul in order
    for(let i = 0; i < li_array.length; i++){
      new_ul.appendChild(li_array[i])
    }
    // Replace old ul with new/sorted ul
    ul.parentNode.replaceChild(new_ul, ul)
  })

})
