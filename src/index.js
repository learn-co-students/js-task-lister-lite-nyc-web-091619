document.addEventListener("DOMContentLoaded", () => {
    
const ul = document.getElementById("tasks")
const form = document.getElementById("create-task-form")

form.addEventListener('submit', function(e){
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = e.target[0].value
    ul.appendChild(li)
    form.reset()

    //delete li functionality
    let button = document.createElement("button")
    button.innerText = "x"
    li.appendChild(button)
    button.addEventListener('click', function(e){
        e.target.parentNode.remove()
    })

    //priority selection
    let select = document.createElement("select")
    select.className = "selection"
    let red = document.createElement("option")
    red.innerText = "High"
    let yellow = document.createElement("option")
    yellow.innerText = "Medium"
    let green = document.createElement("option")
    green.innerText = "Low"
    let normal = document.createElement("option")
    normal.innerText = "Default"
    normal.selected = true

    select.appendChild(red)
    select.appendChild(yellow)
    select.appendChild(green)
    select.appendChild(normal)

    li.appendChild(select)

    select.addEventListener('change', function (e){
        if (e.target.value === "High") {
            e.target.parentNode.style.color = "red"
        } else if (e.target.value === "Medium") {
            e.target.parentNode.style.color = "yellow"
        } else if (e.target.value === "Low") {
            e.target.parentNode.style.color = "green"
        } else if (e.target.value === "Default") {
            e.target.parentNode.style.color = "black"
        }
    })



})

    
    
});









