// Write your code here!
const main = document.getElementById("main");
main.remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.innerHTML = "<h1>YOUR-NAME is the champion</h1>";
document.body.appendChild(newHeader);
console.dir(newHeader);