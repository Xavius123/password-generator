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
    const symbols = [
        '!',
        '@',
        '$',
        '%',
        '&',
        '*',
        '(',
        ')',
        '-',
        '+',
        '?',
        '#',
    ];

    return symbols;
};
