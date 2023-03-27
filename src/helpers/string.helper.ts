export const alphabetArray = (isUpperCase: boolean): string[] => {
    let alpahabet = [];

    for (var i = 97; i <= 122; i++) {
        if (isUpperCase) {
            alpahabet.push(String.fromCharCode(i).toUpperCase());
        } else {
            alpahabet.push(String.fromCharCode(i));
        }
    }

    return alpahabet;
};

export const numbersArray = (): string[] => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const newStringArray = numbers.map((number) => number.toString());

    return newStringArray;
};

export const symbolsArray = (): string[] => {
    const symbols = [];

    for (let i = 33; i <= 126; i++) {
        const char = String.fromCharCode(i);
        if (/[\w\s]/.test(char)) {
            continue; // skip letters, digits, and whitespace
        }
        symbols.push(char);
    }

    return symbols;
};
