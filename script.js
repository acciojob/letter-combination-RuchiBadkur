function letterCombinations(input_digit) {
  //Complete the function
	if (!input_digit) return [];

    const digitToLetters = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const result = [];

    function generateCombinations(index, currentCombination) {
        if (index === input_digit.length) {
            result.push(currentCombination);
            return;
        }

        const letters = digitToLetters[input_digit[index]];
        for (let i = 0; i < letters.length; i++) {
            generateCombinations(index + 1, currentCombination + letters[i]);
        }
    }

    generateCombinations(0, '');

    return result.sort();
}

module.exports = letterCombinations;
