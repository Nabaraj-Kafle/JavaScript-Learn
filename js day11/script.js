let arr = [1,4,56,2,77]

//map - creates new array by performing some operation on each array element

let newarr = arr.map((e ,index , array  )=>{      //  (value, index, array)
    return e+2 
})

console.log(newarr)


//filter - filters an array with values that passes a test and creates new array

const greaterthan50 =(e) =>{
    if (e>50) {
        return true                                    
    }
    return false
}

let newarr2 = arr.filter(greaterthan50)         // can also directly put it here
console.log(newarr2)

//reduce = Reduces an array to a single value
const addred = (a,b) =>{
    return a+b
}
newarr3 = arr.reduce(addred)    // first performs 1+4 then (the result) + 56 then (that result) + 2 and so on
console.log(newarr3)
