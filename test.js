// const findData = [-4, -9, -5, -33, -55];

// function findingBadData(checkData) {
//     let negativeData = 0;

//     for (let i = 0; i < findData.length; i++) {
//         if (findData[i] < 0) {
//             negativeData++;
//         }
//     }
//     return negativeData;
// }
// const myData = findingBadData(findData);
// console.log(myData);




// var numbers=[10,-12,89,56,-83,8,90,-8]
// var neg_count=0
// for(let i=0;i<numbers.length;i++)
// {
// if (numbers[i]<0)
// neg_count++;
// }
// console.log(neg_count);


// // Problem: 3 ::::::::::::::::::::::::::::::::::::::::
// function isLGSeven(numberLGSeven) {
//     const calcFseven = numberLGSeven - 7;
//     if (typeof numberLGSeven !== 'number') {
//         return 'Please Enter Number Type Input.';
//     }
// 	else if ( calcFseven < 7){
// 		return  calcFseven;
// 	}
//     else {
//         return numberLGSeven * 2;
//     }
// }
// const userNumber = isLGSeven('noman');
// console.log(userNumber);



// Problem: 1 ::::::::::::::::::::::::::::::::::::::::::
// function mindGame(number) {
//     if (typeof number !== 'number') {
//         return 'Please Enter a Number Type Input';
//     }
//     else {
//         const numberMultiply = number * 3;
//         const numberSum = numberMultiply + 10;
//         const numberDivided = numberSum / 2;
//         const numberMinus = numberDivided - 5;
//         return numberMinus;
//     }
// }
// const myResult = mindGame('noman');
// console.log(myResult);


// Problem: 2 :::::::::::::::::::::::::::::::::::::::::::
// function evenOdd(stringInput) {
//     const remainder = stringInput.length % 2;

//     if (typeof stringInput !== 'string'){
//         return 'Please Enter String Type Input.';
//     }
//     else if (remainder === 0) {
//         return 'even';
//     }
//     else {
//         return 'odd';
//     }
// }
// const userInput = evenOdd(30);
// console.log(userInput);



// Problem: 4 ::::::::::::::::::::::::::::::::::::::::
// function findingBadData(checkData) {
//     let negativeData = 0;

//     for (let i = 0; i < findData.length; i++) {
//         if (findData[i] < 0) {
//             negativeData++;
//         }
//     }
//     return negativeData;
// }
// // const findData = 45;
// const findData = [-4, -9, -5, -33, -55, 45, 78, -89];
// const myData = findingBadData(findData);
// console.log(myData);






// // Problem: 5 ::::::::::::::::::::::::::::::::::::::::
// function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
//     const firstFriendDiamonds = firstFriendGems * 21;
//     const secondFriendDiamonds = secondFriendGems * 32;
//     const thirdFriendDiamonds = thirdFriendGems * 43;

//     const total_Diamonds = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
//     const DoubleDiamonds = 1000 * 2;

//     if(typeof firstFriendGems !== 'number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !== 'number'){
//         return 'Please Enter Number';
//     }
//     else if (total_Diamonds > DoubleDiamonds) {
//         return total_Diamonds - 2000;
//     }
//     else {
//         return total_Diamonds;
//     }
// }
// const ourDiamonds = gemsToDiamond(100, 5, 1);
// console.log(ourDiamonds);



// Problem: 4 ::::::::::::::::::::::::::::::::::::::::
function findingBadData(checkData) {
    let negativeData = 0;
    
    if (Array.isArray(findData) == true) {
        for (let i = 0; i < findData.length; i++) {
            if (findData[i] < 0) {
                negativeData++;
            }
        }
        return negativeData;
    }
    else {
        return 'Enter Your Data as Array.';
    }
}
const findData = 10;
// const findData = [-4, -9, -5, -33, -55, 45, 78, -89];
const myData = findingBadData(findData);
console.log(myData);