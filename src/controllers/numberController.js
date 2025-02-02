const {
    isPrime,
    isPerfect,
    classifyNumber,
    digitSum,
    funFact
} = require('./numberFuncs');

const getProps = (req, res) => {
    const number = req.query.number;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);

    try {
        res.status(200).json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: classifyNumber(num),
            digit_sum: digitSum(num),
            fun_fact: funFact(num)
        });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getProps;