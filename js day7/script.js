let a= document.getElementById("num")
let i= document.getElementById("dec")
let j= document.getElementById("res")
let k= document.getElementById("inc")


function updateDisplay() {
    a.textContent = m
}
function color(){
    if (a.textContent>0) {
          a.style.color="green"
        
    } else if(a.textContent<0){
        a.style.color="red"
        
    }
    else{
        a.style.color="black"
 
    }
    
}


let m = parseInt(a.textContent,10)

i.addEventListener("click" , ()=>{
    m-- ;

    updateDisplay()
    color()

}
)

j.addEventListener("click" , ()=>{
    m=0 ;

    updateDisplay()
    color()

}
)
k.addEventListener("click" , ()=>{
    m++ ;
    
    updateDisplay()
    
    color()
   

}
)

// i.addEventListener("mousedown",()=>{

//     setInterval(() => {

//         m--
        
//     }, 1000);
// })
// i.addEventListener("mouseup",()=>{

//     setInterval(() => {

//         m=m
        
//     }, 1000);
// })





// m= parseInt()
// i.addEventListener(("click")=>{
//     z++ ;

// }

// console.log("hello")
