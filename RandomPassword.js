
const genBtn = document.querySelector(".btn");
const passWord = document.querySelector(".password");

genBtn.onclick = function(){
    let number = "123456789ABCDEFGHIJKLMNOPQRSTYXZ#@%^&*()_-/";
    let count = 10;
    let myArray = [...number]
   // myArray[Math.floor(Math.random() * myArray.length)]
    let newArray = []
    for(let i = 0; i< count; i++){
        newArray.push(myArray[Math.floor(Math.random() * myArray.length)])
    }
    passWord.value =newArray.join(" ")
    console.log(newArray.join(" "))
}
/* const genBtn = document.querySelector(".btn");
const passWord = document.querySelector(".password");
let currentIndex = 0
genBtn.onclick = function(){
    let number = "123456789ABCDEFGHIJKLMNOPQRSTYXZ#@%^&*()_-/";
    let newNum = ""
    let count = 10;
    for(let i = 0; i< count; i++){
        newNum += number[Math.floor(Math.random() * number.length)]
    }
    console.log(newNum)
    passWord.value = newNum
} */