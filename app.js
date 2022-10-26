// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for ( let i  = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive`;

    if (age < 16) {
        console.log(tooYoungMsg)    
    }else {
        console.log(oldEnoughMsg)
    }
}

checkAge("Reece", 10);
checkAge("SnoopDogg", 16);
checkAge("Juice Wrld", 999);

//Exercise 3

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x == 0 && y != 0) {
        return "Y Axis";
    } else if (x != 0 && y ==0) {
        return "X Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, 1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

//Exercise 4

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
      return `Not a valid triangle`;
    }
}

console.log(checkTriangle(2, 3, 4)); //scalene
console.log(checkTriangle(2, 2, 2)); //equilateral
console.log(checkTriangle(1, 2, 2)); //isosceles
console.log(checkTriangle(1, 1, 2)); //invalid





//Bonus Exercise 5


//function dataUsageFeedback(planLimit, day, usage) {
  //  let periodLength = 30;
  //  console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    //console.log(`Average daily use: ${usage / day} GB/day`);
//}

//dataUsageFeedback(50, 12, 25);



//function checkData(planLimit, day, usage){
  //  const totalDays = 30;
    
    //const daysRemaining = totalDays - day;
    //const dataRemaining = planLimit - usage;


    //const avgUsageSoFar = usage/day;
    //const avgUsagePerfect = planLimit/totalDays;
    //const avgUsageCatchUp = (planLimit - usage)/daysRemaining;

    ////data over/under

    //let extraMess = "";
    //if (avgUsageSoFar > avgUsagePerfect) {
      //  extraMess = `You are EXCEEDING your average daily use (${avgUsagePerfect}),
       // continuing this high usage, you'll exceed your data plan by ${totalDays*avgUsageSoFar - planLimit} GB.`;

    //}


//}
