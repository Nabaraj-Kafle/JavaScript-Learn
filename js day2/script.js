
// let x= Math.random()
//   let first,second,third;
// if(x<0.33){  
//      first="Crazy"
     

// }

// else if(x>0.33 && x<0.66){
//     first="Amazing"
   ////

// }
// else {
//      first="Fire"
//      }



     
//      x= Math.random()
//      if(x<0.33){  
//         second="Engine"
        
   
//    }
   
//    else if(x>0.33 && x<0.66){
//        second="FOods"
      
   
//    }
//    else {
//         second="Garments"
//         }


//         x= Math.random()

//         if(x<0.33){  
//             third="Bros"
            
       
//        }
       
//        else if(x>0.33 && x<0.66){
//            third="Limited"
          
       
//        }
//        else {
//             third="Hub"
//             }

//         console.log( first + second + third  )
//         console.log(`${first} ${second} ${third}`)


// let obj1 = {
//     1:"nam",
//     2:"sam",
//     3:"hari"
// };
// let nam= Math.floor(Math.random()*3)+1;


// console.log(obj1[nam])
// let a=6

// function fact(number){
//     let arr= Array.from(Array(number+1).keys())
//     let c= arr.slice(1).reduce((a,b)=> a*b)
//     return c


// }
// console.log(fact(a))


// let boxes= document.getElementsByClassName("box")
// function getRandomColor(){
//     let val1=Math.ceil(Math.random()*255);
//     let val2=Math.ceil(Math.random()*255);
//     let val3=Math.ceil(Math.random()*255);
    
//     return `rgb(${val1}, ${val2}, ${val3})`
// }



// Array.from(boxes).forEach(e=>{
//     e.style.color=getRandomColor()
//     e.style.backgroundColor=getRandomColor()
// })



//to add an element in the document somewhere
let x = document.createElement("div")  //create the element to be added
x.innerHTML= "How can you forget me i am also a box"  //add content to the element
x.setAttribute("class","new")  //options (adding class)
document.querySelector(".container").append(x)  //append add element to end ; use others like prepend,before accordingly

// adding by using insertAdjacentHTML/text/element
let y= document.querySelector(".container")
let newelement=document.createElement("div")
y.insertAdjacentHTML("afterend","<b> added by insertadjacentHTML")
y.insertAdjacentElement("beforeend",newelement)

//to removeG
x.remove()




