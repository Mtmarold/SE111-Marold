
window.onload= function() {
    console.log(window)
    var div = document.querySelector("div");
    var p = document.querySelector("p")
    var textNode = document.createTextNode("This is the text i wanted to change it to")
    
    p.append(textNode); 
    


}
document.addEventListener("DOMContentLoaded", function(){
loadCode();





})
console.log(window)
var div = document.querySelector("div");
var p = document.querySelector("p");
var textNode = document.createTextNode("This is the text i wanted to change it to");

// p.append(textNode); 
p.innerHTML = textNode.textContent;
div.removeChild(p);
div.appendChild(p);
