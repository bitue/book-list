//grab here 

let author = document.getElementById("author")
let book = document.getElementById("book")
let date = document.getElementById("date")
let btn = document.getElementById("btn")
let push = document.getElementById("push")

//addEvent 

btn.addEventListener("click", function () {
    //basic validation here
    if (author.value == "" && book.value == "" && date.value == "") {
        alert("please enter the full requirements")
    }
    //create element
    //tr
    let tr = document.createElement("tr")
    
    let authorName = author.value
   
    
    let bookName = book.value
   
    let dateName = date.value
   

    //append child
    tr.classList.add("tr")

  push.appendChild(tr);
  tr.innerHTML=
  `
    <th>${authorName}</th>
    <th>${bookName}</th>
    <th>${dateName}</th>
  `


  author.value="";
  book.value="";
  date.value="";

  
  
   
    

    

    




})


