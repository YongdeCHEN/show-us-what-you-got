import Logger from './helpers/logger';
import PrintNumber from './printers/printNumber';

let logger = new Logger();
let printer = new PrintNumber();

//Your code should go here instead of the welcome message below. Create and modify additional files as necessary.

//const welcomeMessage = "Congrats, you're up and running! Welcome to the first moshtix code challenge! " +
//   "Please replace this message with your solution and feel free to add " +
//    "or modify other files as necessary. Good luck : )";
//logger.log(welcomeMessage);

/** 
* Write a program that prints the numbers from 1 to 100. 
* But for multiples of three print 'Boss' instead of the number and 
* for the multiples of five print 'Hog'. 
* For numbers which are multiples of both three and five print 'BossHog'.
*/
let numberStart = 1;
let numberEnd = 100;
logger.log("Start to print the numbers from 1 - 100:");

for (let i=numberStart; i<=numberEnd; ++i) {
    logger.log(printer.getPrintValue(i));
}

