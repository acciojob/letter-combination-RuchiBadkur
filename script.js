function letterCombinations(input_digit) {
    if (!input_digit) return [];

    const map = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };

    const result = [];

    function generateCombination(index, current) {
        if (index === input_digit.length) {
            result.push(current);
            return;
        }

        const letters = map[input_digit[index]];
        for (let i = 0; i < letters.length; i++) {
            generateCombination(index + 1, current + letters[i]);
        }
    }

    generateCombination(0, "");
	console.log(letterCombinations(input_digit));
    return result.sort();
}


module.exports = letterCombinations;
