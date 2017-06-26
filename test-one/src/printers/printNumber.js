
class PrintNumber {
    constructor() {

    }

    getPrintValue = (input) => {
        // other case, don't change the input, just return it
        let output = input;

        if (input % 3 == 0 && input % 5 == 0) {
            // for numbers which are multiples of both three and five print 'BossHog'
            output = "BossHog";
        }
        else if (input % 3 == 0) {
            // for multiples of three print 'Boss' instead of the number
            output = "Boss";
        }
        else if (input % 5 == 0) {
            // for the multiples of five print 'Hog'
            output = "Hog";
        }

        return output;
    }
}

module.exports = PrintNumber;