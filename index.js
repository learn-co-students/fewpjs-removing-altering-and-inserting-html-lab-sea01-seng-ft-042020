let main = document.querySelector('main#main');
main.remove()

let h1 = document.createElement('h1')
document.body.appendChild(h1)
let victory = document.getElementsByTagName("h1")[0].setAttribute("id", "victory")

let newHeader = document.querySelector('h1#victory')

newHeader.innerHTML = "YOUR_NAME is the champion"