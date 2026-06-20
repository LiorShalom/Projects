let readline = require("readline-sync");


function FUNCTIONS(){
    // QUESTION 1:
    function quest1(){
        // Returns the biggest number:
        function quest1_inner(num1, num2){
            return num1 > num2 ? `Number 1: ${num1}` : `Number 2: ${num2}`;
        }

        let number1 = parseInt(readline.question("Enter number1: "));
        let number2 = parseInt(readline.question("Enter number2: "));

        return quest1_inner(number1, number2);
    }

    // QUESTION 2:
    function quest2(){
        function quest2_inner(num1, num2){
            return num1 === num2 ? `> ${num1 += 1}` : 'The numbers are not equal.';
        }

        let number1 = parseInt(readline.question("Enter number1: "));
        let number2 = parseInt(readline.question("Enter number2: "));

        return quest2_inner(number1, number2);
    }

    // QUESTION 3:
    function quest3(){
        function quest3_inner(num1, num2, num3, num4){
            numbersArray = [num1, num2, num3, num4];
            let smallest = numbersArray[0]; 

            for (index=1; index < numbersArray.length; index++){
                if (numbersArray[index] < smallest){
                    smallest = numbersArray[index];
                }
            }
            return `The smallest number is: ${smallest}`;
        }

        // I wanted to create a 'for' loop but the task instruct to do it different:
        let number1 = parseInt(readline.question("Enter number1: "));
        let number2 = parseInt(readline.question("Enter number2: "));
        let number3 = parseInt(readline.question("Enter number3: "));
        let number4 = parseInt(readline.question("Enter number4: "));

        return quest3_inner(number1, number2, number3, number4);
    }

    // QUESTION 4:
    function quest4(){
        function quest4_inner(num){
            return num % 2 === 0 ? 'Even' : 'Not even';
        }
        number = parseInt(readline.question("Enter a number: "));

        return `> ${(quest4_inner(number))}`;
    }

    // QUESTION 5:
    function quest5(){
        function quest5_inner(num1, num2, num3, num4){
            const numbersArray = [num1, num2, num3, num4];
            let countEquals = 0;

            for (let index=0; index < numbersArray.length; index++){
                for (let secIndex=index + 1; secIndex < numbersArray.length; secIndex++){
                    if (numbersArray[index] === numbersArray[secIndex]){
                        countEquals++;
                    }
                }
            }
            if (countEquals === 6){
                return '> All equals.';
            } else if (countEquals === 3){
                // Extra -> if 3 numbers are equal to each other.
                return '> Only 3 numbers are equals.';
            } else if (countEquals === 1){
                return '> Only 2 numbers are equals.';
            } else {
                return '> All numbers not equals.';
            }
        }

        let number1 = parseInt(readline.question("Enter number1: "));
        let number2 = parseInt(readline.question("Enter number2: "));
        let number3 = parseInt(readline.question("Enter number3: "));
        let number4 = parseInt(readline.question("Enter number4: "));

        return quest5_inner(number1, number2, number3, number4);
    }

    // QUESTION 6:
    function quest6(){
        function quest6_inner(num){
            let day;
            switch (num){
                case 1:
                    day = 'Sunday';
                    break;
                case 2:
                    day = 'Monday';
                    break;
                case 3:
                    day = 'Tuesday';
                    break;
                case 4:
                    day = 'Wednesday';
                    break;
                case 5:
                    day = 'Thursday';
                    break;
                case 6:
                    day = 'Friday';
                    break;
                case 7:
                    day = 'Saturday';
                    break;
            }
            return day;
        }

        let number, end = true;

        do {
            
            number = parseInt(readline.question("Enter a number between 1 and 7: "));
            // Using IIFE -> Immediately Invoked Function Expression: (It's like a ternary expression but in function).
            // If the number is in the range of 1-7 it will call the function, else return 'Error' (IIFE).
            if (number >= 1 && number <= 7){
                return quest6_inner(number);
            } else {
                console.log('Error');
                end = false;
            }
        } while (!end);
    }

    // QUESTION 7:
    function quest7(){
        const MONTHS_INFO = {
            1:  { month: 'January'  , days: 31 },
            2:  { month: 'February' , days: 28 },
            3:  { month: 'March'    , days: 31 },
            4:  { month: 'April'    , days: 30 },
            5:  { month: 'May'      , days: 31 },
            6:  { month: 'June'     , days: 30 },
            7:  { month: 'July'     , days: 31 },
            8:  { month: 'August'   , days: 31 },
            9:  { month: 'September', days: 30 },
            10: { month: 'October'  , days: 31 },
            11: { month: 'November' , days: 30 },
            12: { month: 'December' , days: 31 },
            };

        // Will create a list of numbers in a range (like in python):
        function range(start, end, step=1){
            let list = [];

            for (let i = start; i <= end; i+=step){
                // Append number 'i' to the list 'result':
                list.push(i);
            }
            return list;
        }

        function quest7_inner(monthNum){
            let validMonth = range(1, 12);

            if (!validMonth.includes(monthNum)){
                console.log('Invalid input! Please try again.');
                return false;
            } else {
                return `> ${MONTHS_INFO[monthNum].month}:\n  Days in month: ${MONTHS_INFO[monthNum].days}`;
                }
            }

        let number, validInput=true;
        // Will prompt a number from the user and will ask agin until the number will be between 1 and 12:
        do{
            // Input a number:
            number = parseInt(readline.question("Enter a number between 1 and 12: "));
            validInput = quest7_inner(number);
        } while (!validInput);
        return validInput;
    }

    // QUESTION 8:
    function quest8(){
        // each function of a question has his own variables.
        // In here the function will have is own inner/global variable.
        // Thats means the varible will be global only within the function itself.
        let GOLBAL_VAR = '';

        // Make the first letter capital letter:
        function capitilze(name){
            return name.charAt(0).toUpperCase() + name.slice(1);
        }

        // log the name:
        function quest8_inner(name){
            return `Your name is: ${capitilze(name)}.`;
        }

        GOLBAL_VAR = readline.question('Enter your name: ');
        return quest8_inner(GOLBAL_VAR);
    }

    // QUESTION 9:
    function quest9(){
        // This function will use local variables:
        function quest9_inner(){
            let name = readline.question('Enter your name: ');
            return `Your name is ${name}`;
        }
        return quest9_inner();
    }

    // Question selector:
    function questionSelector(select){
        switch (select){
            case 1:
                return quest1();
            case 2:
                return quest2();
            case 3:
                return quest3();
            case 4:
                return quest4();
            case 5:
                return quest5();
            case 6:
                return quest6();
            case 7:
                return quest7();
            case 8:
                return quest8();
            case 9:
                return quest9();
        }
    }
    
    // Main of FUNCTIONS:
    function main_Functions(){
        console.log("\n--[FUNCTIONS]--\nPlease select a question from 1 to 9 to see my beatiful work:");
        const questList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let questNum;
        
        do {
            questNum = parseInt(readline.question('> '));

            if (!questList.includes(questNum)){
                console.log("Invalid input. Please select a question from 1 to 9:");
            } else {
                return questionSelector(questNum);
            }

        } while (!questList.includes(questNum));
    }
    return main_Functions()
} // [END OF 'FUNCTIONS']

// ----------------------------------------------------- //

function LOOPS(){

    // QUESTION 1:
    function quest1(){
        // Prints all numbers from 1 to 10:
        function printNumbers(numbers){
            for (let num = 0; num <= 10; num++){
                num === 10 ? numbers += `${num}. `: numbers += `${num}, `;
            }
            return numbers;
        }
        let result = '';
        return printNumbers(result);
    }
    
    // QUESTION 2:
    function quest2(){
        var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56]

        function deleteElement(number){
            for (let i = 0; i< arr.length; i++){
                arr[i] === number ? arr.splice(i, 1): null;
            }
            return `NEW > [${arr}]`;
        }
        console.log(`Hi!\nI have this array > [${arr}].\nWhat number you want to delete from the array?`);
        while (true){
            number = parseInt(readline.question('Enter a number to delete: '));
            if (!arr.includes(number)){
                console.log("[!] I can't find this number in the array, try a different one...\n");
            } else {
                break;
            }
        }
        return deleteElement(number);
    }
    
    // QUESTION 3:
    function quest3(){
        // This function will return how many numbers are odd and how many are even:
        function quest3_inner(array){
            let even = 0, odd = 0;
            for (let i = 0; i < array.length; i++){
                if (array[i] % 2 === 0){
                    even++;
                } else {
                    odd++;
                }
            }
            return `\nThanks ;)\nResults > [ODD: ${odd}] | [EVEN: ${even}]`;
        }

        // This function collects numbers and build the array:
        function array(length){
            console.log(`\nNow it's time to build your costom array!\nEnter ${length} numbers:`);
            let userArray = [];
            for (let i = 0; i < length; i++){
                let number = parseInt(readline.question(`[Number ${i+1}]> `));
                userArray.push(number);
            }
            return userArray;
        }

        console.log(
            `Welcome to question number 3 of my 'LOOPS' homework!
In this question I will ask for a costomized list of numbers for your choice.
My job is to tell you how many numbers are odd and how many are even.
[LET'S BEGIN!]\n`
        );
        let validLength = false;
        let length;
        while (!validLength){
            length = parseInt(readline.question('What is the length of your array?\n[Your Answer?]> '));
            length <= 15 && length >= 5 ? validLength = true : console.log('[!] The length must be between 5 to 15 number.\n');
        }
        let arr = array(length);
        return quest3_inner(arr);
    }
    
    // QUESTION 4:
    function quest4(){
        duplications = [];
        function findDup(array){
            for (let i = 0; i < array.length; i++){
                for (let j = 0; j < array.length; j++){
                    if (j === i && duplications.includes(array[i])){
                        continue;
                    } else if (j !== i && array[i] === array[j] && !duplications.includes(array[i])){
                        duplications.push(array[i]);
                    }
                }
            }
            return `Numbers that appears more than ones > [${duplications}]`;
        }

        // This function collects numbers and build the array:
        function array(length){
            console.log(`\nNow it's time to build your costom array!\nEnter ${length} numbers:`);
            let userArray = [];
            for (let i = 0; i < length; i++){
                let number = parseInt(readline.question(`[Number ${i+1}]> `));
                userArray.push(number);
            }
            return userArray;
        }

        console.log(
            `Welcome to question number 4 of my 'LOOPS' homework!
In this question I will ask for a costomized list of numbers for your choice.
My job is to return all the numbers that appears more than once.
[LET'S BEGIN!]\n`
        );
        let validLength = false;
        let length;
        while (!validLength){
            length = parseInt(readline.question('What is the length of your array?\n[Your Answer?]> '));
            length <= 15 && length >= 5 ? validLength = true : console.log('[!] The length must be between 5 to 15 number.\n');
        }
        let arr = array(length);
        return findDup(arr);
    }

    // QUESTION 5:
    function quest5(){
        // Prints number 1 to 20 one number per line:
        function oneTwenty(){
            console.log('\n1 to 20:');
            for (let i = 1; i <= 20; i ++){
                console.log(`[+] > ${i}`);
            }
        }
        oneTwenty();

        // Prints only the ODD numbers from 3 to 29 one per line:
        function ODD3to29(){
            console.log('\n3 to 29 only ODDs:');
            for (let i = 3; i <= 29; i ++){
                if (i % 2 !== 0){
                    console.log(`[+] > ${i}`);
                }
            }
        }
        ODD3to29();

        function oneTwenty_EvenDescend(){
            console.log('\n20 to 1 only EVENs:');
            for (let i = 20; i >= 1; i--){
                if (i % 2 === 0){
                    console.log(`[+] > ${i}`);
                }
            }
        }
        oneTwenty_EvenDescend()

        function fiftyTo20_multi3(){
            console.log('\n50 to 20 only multiplications of 3:');
            for (let i = 50; i >= 20; i--){
                if (i % 3 === 0){
                    console.log(`[+] > ${i}`);
                }
            }
        }
        fiftyTo20_multi3()
        return '';
    }
    
    // QUESTION 6:
    function quest6(){
        const launch = 'LaunchCode';
        const array = [1, 5, 'LC101', 'blue', 42];

        console.log("\nThe array:");
        for (let i = 0; i < array.length; i++){
            console.log(`[+] > ${array[i]}`);
        }

        console.log("\nThe string:");
        for (let i = launch.length - 1; i >= 0; i--){
            console.log(`[+] > ${launch.charAt(i)}`);
        }
        return '';
    }
    
    // QUESTION 7:
    function quest7(){
        // Prints 'hello' 10 times:
        let num = 0;
        while (num !== 10){
            // The ternary expresion is used to fix the output in the terminal:
            num === 9 ? console.log(`[${num + 1}] > Hello`): console.log(`[${num + 1}]  > Hello`);
            num ++;
        }
        return '';
    }
    
    // QUESTION 8:
    function quest8(){
        // In this question I was lazy so I prepared in advance the array:
        const array = [1, 45, 7,  23, 12, 7, 9, 3, 5, 45, 5, 13];
        // The function don't need to call the array beacuse it's defined before him:
        function quest8_inner(number){
            let sumArray = 0;
            for (let i = 0; i < array.length; i++){
                sumArray += array[i];
            }

            while (sumArray < number){
                sumArray += number;
            }
            return sumArray;
        }

        let number = parseInt(readline.question("Enter a number: "));
        return quest8_inner(number);
    }
    
    // QUESTION 9:
    function quest9(){
        function quest9_inner(){
            let bool = true, index = 0;
            while (bool === true){
                bool = boolArray[index];
                index ++;
            }
            // It's important to subtract 1 in the return because the last iteration adding 1:
            return `The index of the first 'false' value is > [${index - 1}]`;
        }

        const boolArray = [true, true, true, true, false, false, true, true, false, true];
        console.log(`\nThis is the array I've got:\n[${boolArray}]`);
        return quest9_inner(boolArray);
    }
    
    // QUESTION 10:
    function quest10(){
        function quest10_inner(array){
            let index = 0;
            while (index <= array.length){
                if (array[index] === 'hello' && index % 2 !== 0){
                    return `I found 'hello' in index [${index}] that appears to be ODD index.`;
                }
                index++;
            }
        }
        const array = ['hello', 'my', 'name', 'is', 'not', 'h3llo', 'but', 'my', 'cat', 'likes', 'to', 'say', 'hello', 'what', 'about', 'you', '?', 'hello', 'helloooo', 'hello', '?'];
        console.log(`\nI have this array:\n[${array}]\n`);
        return quest10_inner(array);
    }
    
    
    // Question selector:
    function questionSelector(select){
        switch (select){
            case 1:
                return quest1();
            case 2:
                return quest2();
            case 3:
                return quest3();
            case 4:
                return quest4();
            case 5:
                return quest5();
            case 6:
                return quest6();
            case 7:
                return quest7();
            case 8:
                return quest8();
            case 9:
                return quest9();
            case 10:
                return quest10();
        }
    }

    // Main of LOOPS:
    function main_Loops(){
        console.log("\n--[LOOPS]--\nPlease select a question from 1 to 9 to see my beatiful work:");
        const questList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let questNum;
        
        do {
            questNum = parseInt(readline.question('> '));

            if (!questList.includes(questNum)){
                console.log("Invalid input. Please select a question from 1 to 9:");
            } else {
                return questionSelector(questNum);
            }

        } while (!questList.includes(questNum));
    }
    return main_Loops();
}


// MAIN FUNCTION:
function main(){
    // Introduction
    console.log("Hi!\nWelcome to Lior's JavaScript homework.\nThis project contains both the 'functions' and the 'loops' homework.");
    while (true){
        let selectHW = readline.question("Choose between the 'functions' [F] to the 'loops' [L] homework:\n[F\\L] -> ");

        if (selectHW === 'F'){
            console.log(`${FUNCTIONS()}\n`);
            continue;
        } else if (selectHW === 'L'){
            console.log(`${LOOPS()}\n`);
            continue;
        } else {
            console.log("[!] Invalid input! You have only two options...");
            continue;
        }
    }
}

main();