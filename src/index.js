document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // create a variable named "button" which is assigned the line:
  //    <input type="submit" value="Create New Task">
  // by using .getElementsByTagName to return the collection of
  // elements with the tag name "input".  We use the 2nd child
  // element of that collection by using the array index of 1.
  
  let button = document.getElementsByTagName("input")[1];

  // we add an addEventListner for the "click" event (argument 1), 
  // and create a nested function that could be anonymous, but 
  // which we called 'clickHandler' and passed it the MouseEvent 
  // argument which we named 'anythang'.

  button.addEventListener("click", function clickHandler(anythang) {

    // the first thing we do is prevent the default action of the
    // mouse click from going through, to be replaced with our own
    // code.  https://www.w3schools.com/jsref/event_preventdefault.asp
    anythang.preventDefault()

    // next we instantiate the variable "taskUL" and assign it to the
    // element which was returned by the getElementByID() function, which 
    // returns the element whose "id" property matches the specified string
    // of "tasks".  Tasks is an unordered list <ul></ul> that will contain 
    // all of the <li></li> elements which we generate.
    let taskUL = document.getElementById("tasks")

    // we instantiate the variable "inputText" and assign it to the
    // "value" attribute of the getElementsByTagname("input"), which
    // is the first half of the collection that we gathered earlier
    // for our "button" variable.  This time we use array index of 0
    // to access the first line, which looks like this in the html:
    // <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
    // This element contains an attribute called "value" which contains
    // the text that was captured inside of the text input area before
    // the submit button was pushed.
    let inputText = document.getElementsByTagName("input")[0].value
    
    // Then we instantiate a variable called "li" to hold the return value
    // of createElement("li") which gives us a new <li></li> element
    let li = document.createElement("li")

    // We take the text that we captured in the text input area (inputText)
    // and we place it as a property inside the <li> element, adding a " "
    // at the end to give us space between the text and the delete button
    // which follows
    li.innerText = inputText + " ";
    
    // The variable deleteButton is instanatiated and set to a new element 
    // of type "button".
    let deleteButton = document.createElement("button")
    
    // The inner text of that button is set to "X"
    deleteButton.innerText = "X"
    
    // Here we add an attribute to the button, which we don't really need but
    // it was included in the example provided to us.  The button element looks
    // like this in HTML:
    //        <button data-description="test">X</button>
    deleteButton.setAttribute("data-description", inputText)

    // We attach an addEventListener EVENT HANDLER to the "click" event on 
    // the deleteButton and set it to the named function deleteHandler.  This
    // could be an anonymous function but is named for clarity.  Then, we pass
    // a single argument to the function deleteHandler() which is 'e'.  It is 
    // an instance of "mouseEvent" object.

    // Within the function we are only taking a single action, which is to use
    // the mouseEvent object to reference itself using .currentTarget() which 
    // evaluates back to the deleteButton.  With the deleteButton now targetted
    // we use ".parentNode" to target its parent element, which is the <li></li>
    // and call the remove() function on it.
    deleteButton.addEventListener("click",function deleteHandler(e) {
      e.currentTarget.parentNode.remove();
    })

    // We append (attach) the delete button to the <li></li> element
    li.appendChild(deleteButton)

    // Final step is to take the <ul></ul> element which is now carrying a 
    // child node of a <li></li> element.  That <li><//li> element is 
    // carrying a child node element of type button, which has a 
    // addEventListener for the "click" action attached to it.
    taskUL.appendChild(li)
  });


});


