ocument.addEventListener("DOMContentLoaded", () => {
    
    let button = document.getElementsByTagName("input")[1];

  
    button.addEventListener("click", function clickHandler(anythang) {
      anythang.preventDefault()

      let taskUL = document.getElementById("tasks")
      let inputText = document.getElementsByTagName("input")[0].value
      let li = document.createElement("li")

      li.innerText = inputText + " ";

      let deleteButton = document.createElement("button")
      deleteButton.innerText = "X"
      deleteButton.setAttribute("data-description", inputText)
      deleteButton.addEventListener("click",function deleteHandler(e) {
        e.currentTarget.parentNode.remove();
      })

      li.appendChild(deleteButton)
      taskUL.appendChild(li)
    });
  
  
  });
  
  
  