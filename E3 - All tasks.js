// E3.2 - Задание 1

function arrAnalyse() {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, false, 'null', null, 0]

    let even = 0
    let odd = 0
    let nulls = 0
    let notNum = 0

    arr1.forEach(function(item, index, array){
        if (typeof item == "number" && !isNaN(item)) {
            if (item === 0) {
                nulls += 1
            } else if (item % 2 == 0) {
                even += 1
            } else {
                odd += 1
            }
        } else {
            notNum += 1
        }
    })

    console.log('Четных чисел', even)
    console.log('Нечетных чисел', odd)
    console.log('Нулей', nulls)
    console.log('Не цифровых значений', notNum)
}

arrAnalyse();

// E3.4 - Задание 2

function isPrime(num) {
    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return `Число ${num} это составное число`;
            }
        } return `Число ${num} это простое число`;
    } else {
        return `Число должно быть больше 1 и меньше 1000`;
    }
}

console.log(isPrime());

// E3.5 - Задание 3

function getFullSum(num1){
    return function (num2){
        return num1 + num2
    }
}

const getSum = getFullSum(10);
const sum = getSum(5)
console.log (sum);

// E3.7 - Задание 4

function enumeration(start, end){
    let current = start;

    let intervalId = setInterval(function(){
        console.log(current);
        if(current == end){
            clearInterval(intervalId);
        } current++;
    }, 1000);
}
enumeration(5, 15);

// E3.8 - Задание 5

const multiplication = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++){
        result *= x;
    } return result;
}


const result = multiplication(3, 3);
console.log(result);