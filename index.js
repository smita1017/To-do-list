// if(ip==""){
//   alert("plese Enter some text")
// }
// else  {
function Add(){
  let ul=document.createElement("ul")
ul.setAttribute("class","list")
let div=document.createElement("div")
div.setAttribute("class","licontainer")
let span1=document.createElement("span")
span1.setAttribute("class","img")
let span2=document.createElement("span")
span2.setAttribute("class","img")
let li=document.createElement("li")
li.setAttribute("class","content")
let i1=document.createElement("i")
i1.setAttribute("class","fa-solid")
i1.classList.add("fa-check")
let i2=document.createElement("i")
i2.setAttribute("class","fas")
i2.classList.add("fa-times")
span1.appendChild(i1)
span2.appendChild(i2)
div.appendChild(span1)

div.appendChild(li)
div.appendChild(span2)
ul.appendChild(div)
  let ip=document.getElementById("input").value
  li.textContent=ip
  let main=document.querySelector("main")
  main.appendChild(ul)
}

  // let container = document.getElementById("container");
  // container.appendChild(ul);










































// // let input=document.getElementsByClassName(".input").value;
// // function addlist(){
// //     // alert("hii")
// // let span=document.createElement("span");
// // span.classList.add("addtick");
// // addtick.textcontent="N"
// // let li=document.createElement("li")
// // li.appendChild.span
// // let span2=document.createElement("span");
// // span2.classList.add("addcross")
// // addcross.textcontent="Y"
// // li.appendChild.span;
// // li.appendChild.span2;
// // }

// let list = document.querySelector(".list");

// let ip=document.getElementById("input")


// function add(){
//     let span1=document.createElement("span");
//     span1.classList.add("img");
//     span1.textContent="X";



//     let span2=document.createElement("span");
//   span2.classList.add("img");
//     let i=document.createElement("i");
//     i.classList.add("fas", "fa-times")
// span1.appendChild(i)
   
// let div=document.createElement("div");
// div.classList.add="licontainer";
//     let li=document.createElement("li")
//     li.classList.add="content"
//     li.textContent=ip.value;
//     document.body.licontainer.appendChild(span1);
//     licontainer.appendChild(content);
//     document.body.licontainer.appendChild(span2);
//   //   span1.appendChild(li)
//   //   li.appendChild(span2)
//   // list.appendChild(li)

   
//     // document.body.appendChild(span2);l

// }