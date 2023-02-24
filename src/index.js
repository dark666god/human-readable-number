module.exports = function toReadable(number) {
    if (!Number.isFinite(number)) throw new Error("ERR");
    if (number === 0) return "zero";
    let a = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let b = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let c = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 10) return a[number - 1];
    if (number < 20 && number !== 10) return b[(number % 10) - 1];
    number = `${number}`;
    let rank = number.length;
    if (rank === 2) {
        return +number[1] === 0
            ? c[+number[0] - 1]
            : c[+number[0] - 1] + " " + a[number[1] - 1];
    } else {
        if (+number % 100 === 0) return `${a[number[0] - 1]} hundred`;
        if (+number % 10 === 0)
            return `${a[number[0] - 1]} hundred ${c[+number[1] - 1]}`;
        if (+(number[1] + number[2]) > 10 && +(number[1] + number[2]) < 20)
            return `${a[number[0] - 1]} hundred ${
                b[+(number[1] + number[2] - 1) % 10]
            }`;
        if (+number[1] === 0)
            return `${a[number[0] - 1]} hundred ${a[+number[2] - 1]}`;
        else {
            return `${a[number[0] - 1]} hundred ${c[+number[1] - 1]} ${
                a[+number[2] - 1]
            }`;
        }
    }
};
