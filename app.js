function addition(x, y){
    return x + y
}
console.log(addition(5,3))

function hoursIntoSeconds(hour)
{
    return hour * 3600
}

console.log(hoursIntoSeconds(24))

function calcPerimeter(length, width){
    return 2*length + 2*width
}
console.log(calcPerimeter(10,20))

function calcRemainder(num1,num2){
    return num1 % num2

}

console.log(calcRemainder(7,8))

function isOdd(num){
    return num % 2 === 1
}
console.log(isOdd(91876291091))

function booleanInteger(num){
    return num % 2 === 1 ? -1 : 1
}
console.log(booleanInteger(5))

function isLoggedInAndSubscribed(log, sub){

    return log === "LOGGIN_IN" || sub === 'SUBSCRIBED'
}
console.log(isLoggedInAndSubscribed("LOGGIN_IN",'UNSUBSCRIBED'))