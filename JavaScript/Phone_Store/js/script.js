var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0
var btnAdd=document.querySelectorAll("#add")

btnAdd.forEach(function(item){
   item.onclick=function(){
      totalPrice+=+(item.getAttribute("price"))
      content.innerHTML+=item.getAttribute("name")+" & "
      if(content.innerHTML!=""){
         btn1.style.display="block"
      }
   }
})
btn1.onclick=function(){
   document.getElementById("div3").innerHTML=(totalPrice)+"LE"
}