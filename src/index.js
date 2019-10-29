document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // function deleteButton(event){
  //   let lIs = document.getElementsByTagName
  // }
  
  function clickHandler(anythang){
    anythang.preventDefault()
    let taskUL = document.getElementById("tasks")
    let inputText = document.getElementsByTagName("input")[0].value
    let li = document.createElement("li")
    li.innerText = inputText + " ";
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.addEventListener("click", deleteButton)

    deleteButton.setAttribute("data-id", inputText)
    li.appendChild(deleteButton) 
    taskUL.appendChild(li) 
  
  }
  let button = document.getElementsByTagName("input")[1];
  button.addEventListener("click", clickHandler);




  
  
});



// users should be able to type a task into the input field
// users should be able to click some form of a submit button
// the task string that the user provided should appear on the DOM after the submit button has been activated


// let button = document.getElementsByTagName("input")[1];
// // document.getElementById("submitid").
// button.addEventListener("click", function(event){
//   event.preventDefault()
//   let taskUL = document.getElementById("tasks")
//   let inputText = document.getElementsByTagName("input")[0].value
//   let li = document.createElement("li")
  
//   li.innerText = inputText;
//   taskUL.appendChild(li)
// });
