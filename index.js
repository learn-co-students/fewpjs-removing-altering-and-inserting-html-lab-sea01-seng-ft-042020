// Write your code here!


var main = document.querySelector('main');
main.remove()



let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Trevor is the champion"


//   it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
//     expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
//   });