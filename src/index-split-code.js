document.addEventListener("DOMContentLoaded", () => {

    function clickHandler(anythang) {
        anythang.preventDefault()
        let taskUL = document.getElementById("tasks")
        let inputText = document.getElementsByTagName("input")[0].value
        let li = document.createElement("li")
        li.innerText = inputText + " ";
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "X"
        deleteButton.setAttribute("data-description", inputText)
        deleteButton.addEventListener("click",function(e) {
            e.currentTarget.parentNode.remove();
        })
        li.appendChild(deleteButton)
        taskUL.appendChild(li)
    }
        
    let button = document.getElementsByTagName("input")[1];

    button.addEventListener("click", clickHandler);`

    
});
  
  