const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
};

const classifyNumber = (num) => {
    const digits = num.toString().split('');
    const numDigits = digits.length;

    const isArmstrong = digits
        .map(digit => Math.pow(parseInt(digit), numDigits))
        .reduce((a, b) => a + b, 0) === num;

    if (isArmstrong) {
        return num % 2 === 0 ? ["armstrong", "even"] : ["armstrong", "odd"];
    }

    return num % 2 === 0 ? ["even"] : ["odd"];
};

const digitSum = (num) => {
    const isNegative = num < 0;
    const numString = Math.abs(num).toString();

    return numString
        .split('')
        .reduce((sum, digit) => sum + (isNegative ? -parseInt(digit) : parseInt(digit)), 0);
};

module.exports = {
    isPrime,
    isPerfect,
    classifyNumber,
    digitSum
};