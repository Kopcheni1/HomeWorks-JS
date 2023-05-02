let myCar = {};
myCar.maker = "Mazda"
myCar.color = "white"

function ownValue(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key, obj[key]);
        }
    }
}

ownValue(myCar)
