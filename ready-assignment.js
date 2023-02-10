/** 
 * Problem: 1
 * mindGame(): mindGame() function do the some Mathematical calculation, like: Multiplication, Summation, Division & Substraction. 
*/
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please Enter a Number Type Input';
    }
    else {
        const numberMultiply = number * 3;
        const numberSum = numberMultiply + 10;
        const numberDivided = numberSum / 2;
        const numberMinus = numberDivided - 5;
        return numberMinus;
    }
}


/** 
 * Problem: 2
 * evenOdd(): We do this program for show even/odd as a output. Which only support string type input. First we calculate the user string type input character length. Then based of string length, we show the output, its even or odd.
*/
function evenOdd(stringInput) {
    const remainder = stringInput.length % 2;

    if (typeof stringInput !== 'string') {
        return 'Please Enter String Type Input.';
    }
    else if (remainder === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}


/**
 * Problem: 3
 * isLGSeven(): This program do less than/greater than & multiplication calculation. First, we get one number type input, if the input number is less than 7, then the output shows the same as the input. if the input is greater than 7, then the output is double the input.
*/
function isLGSeven(numberLGSeven) {
    const calcFseven = numberLGSeven - 7;

    if (typeof numberLGSeven !== 'number') {
        return 'Please Enter Number Type Input.';
    }
    else if (calcFseven < 7) {
        return calcFseven;
    }
    else {
        return numberLGSeven * 2;
    }
}


/**
 * Problem: 4
 * findingBadData(): This program calculate how negative data are stay in array. Then, show the output their total counting number.
*/
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
const findData = [-4, -9, -5, -33, -55, 45, 78, -89];


/** 
 * Problem: 5
 * gemsToDiamond(): This program calculates Gems to Diamonds. Here we give 3 number type input in function arguments as Gems. Then, calculate its multiplication with every gem power. Then, calculates the summation of the total diamonds. If the summation is less than double 1000, the output is total summation diamonds. If, the summation is greater than double 1000, then subtract 2000 from the total number of diamonds.
*/
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    const firstFriendDiamonds = firstFriendGems * 21;
    const secondFriendDiamonds = secondFriendGems * 32;
    const thirdFriendDiamonds = thirdFriendGems * 43;

    const total_Diamonds = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
    const DoubleDiamonds = 1000 * 2;

    if (typeof firstFriendGems !== 'number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !== 'number') {
        return 'Please Enter Number Type Input';
    }
    else if (total_Diamonds > DoubleDiamonds) {
        return total_Diamonds - 2000;
    }
    else {
        return total_Diamonds;
    }
}