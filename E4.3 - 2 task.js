let myCar = {
    maker: "Mazda",
    color: "white"
};

let string1 = "maker"
let string2 = "white"

function hasValue(str, obj){
    return str in obj;
}

console.log(hasValue(string1, myCar))
console.log(hasValue(string2, myCar))