function above18(callback){
let age = prompt("enter your age ")
let ageint= parseInt(age)
    if(isNaN(ageint)){
        console.log("Please enter valid input")
    }
else if (ageint>=18) {
    console.log("you are eligible to vote ")
    
} else {  console.log("you are not eligible to vote")
    
}

callback(ageint)
}


function callback(age){
    if (age>=25) {
        console.log("I am experienced in voting ")
        
    } else {  console.log("I am not ecperienced in voting")
        
    }
    
}

above18(callback)


