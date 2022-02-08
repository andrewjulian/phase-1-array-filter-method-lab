// Code your solution here

function findMatching(array, string){
    return array.filter((item) => item.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(array, string){    
    return array.filter((item) => item.slice(0,string.length) === string)
}



//matchName - This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.

function matchName (array, string){
    return array.filter(item  => item.name === string)
}
    