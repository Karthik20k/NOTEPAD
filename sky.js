// selecting popup box and popup overlay button
var overlay = document.querySelector(".pop-overlay")
var popbox = document.querySelector(".pop-box")
var addpop=document.getElementById("add-popup")
var canceli=document.getElementById("cancel-book")

addpop.addEventListener("click",function(){
overlay.style.display="block"
popbox.style.display="block"
})
//select cancel button
canceli.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popbox.style.display="none"
})
var container = document.querySelector(".container")
var addi=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var author=document.getElementById("book-Author")
var script=document.getElementById("book-script")

addi.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-cont")
    div.innerHTML=` <h2>${booktitle.value}</h2>
            <h5>${author.value}</h5>
            <p>${script.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}