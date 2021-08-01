console.log("******** hello *********")

let selector = document.querySelector("main");
selector.remove(); 

const newHeader = document.createElement('h1'); 
newHeader.idName = "victory";
newHeader.setAttribute("id", "victory");
const p = document.createElement('p');
  p.innerHTML = "Sitora is the champion";
  newHeader.appendChild(p);


