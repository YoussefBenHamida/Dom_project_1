//btn + and btn -
let btnplus=Array.from(document.getElementsByClassName("add"))
console.log(btnplus)
for(let i =0;i<btnplus.length;i++){
  btnplus[i].addEventListener("click",function(){
    btnplus[i].nextElementSibling.innerHTML ++
    sum()
  })
}

let btnminus=Array.from(document.getElementsByClassName("minus"))
console.log(btnminus)
for(let i =0;i<btnminus.length;i++){
  btnminus[i].addEventListener("click",function(){
    if(btnminus[i].previousElementSibling.innerHTML > 0){
    btnminus[i].previousElementSibling.innerHTML --
    sum()
    }
  })
}


// remove Item "Trash"
let button_remove = Array.from(document.getElementsByClassName("fa-trash-alt"))
for ( let elms of button_remove){
    elms.addEventListener("click", function(){
        elms.parentNode.remove()
        sum()
    })
}

// Change heart color
let heart = Array.from(document.getElementsByClassName("fa-heart"))
for ( let elm of heart){
    elm.addEventListener("click", function(){
        if(elm.style.color == "red"){
            elm.style.color = "grey"
        } 
        else{
            elm.style.color = "red"
        }
    })
}

//total
function sum(){
  let quantity= document.getElementsByClassName("qte")
  let price = document.getElementsByClassName("price")
  let total = 0

  for(let i = 0;i<quantity.length;i++){
       total += quantity[i].innerHTML*price[i].innerHTML
  }
  return(document.getElementById("totalp").innerHTML= "Shopping Bag total : $" + total)
}