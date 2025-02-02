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
    const isArmstrong = num
        .toString()
        .split('')
        .map(digit => Math.pow(parseInt(digit), num.toString().length))
        .reduce((a, b) => a + b, 0) === num;

    if (isArmstrong) {
        return num % 2 === 0 ? ["armstrong", "even"] : ["armstrong", "odd"];
    }
    return num % 2 === 0 ? ["even"] : ["odd"];
};

const digitSum = (num) => {
    return num
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
};

const funFact = async (num) => {
    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        const funFact = funFactResponse.data.text;
        return funFact;
    } catch (err) {
        res.status(400).json({message: 'Error fetching number fun fact'});
    }
};

module.exports = {
    isPrime,
    isPerfect,
    classifyNumber,
    digitSum,
    funFact
};