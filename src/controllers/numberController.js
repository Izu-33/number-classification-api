const axios = require('axios');
const {
    isPrime,
    isPerfect,
    classifyNumber,
    digitSum
} = require('./numberFuncs');

const getProps = async (req, res) => {
    const number = req.query.number;

    if (/^\d+$/.test(number)) {
        const num = parseInt(number);

        try {
            const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
            const funFact = funFactResponse.data.text;

            res.status(200).json({
                number: num,
                is_prime: isPrime(num),
                is_perfect: isPerfect(num),
                properties: classifyNumber(num),
                digit_sum: digitSum(num),
                fun_fact: funFact
            });
        } catch (err) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        return res.status(400).json({ number, error: true });
    }
};

module.exports = getProps;