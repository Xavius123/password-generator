import { alphabetArray, numbersArray, symbolsArray } from './string.helper';

export const passwordRandomizer = (
    chars: string[],
    sliderValue: number
): string => {
    let password = '';

    for (let i = sliderValue; i > 0; i--) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
};

export const passwordGenerator = (
    sliderValue: number,
    useUpperCase: boolean,
    useLowerCase: boolean,
    useNumbers: boolean,
    useSymbols: boolean
): string => {
    const alphabetLowerCase = alphabetArray(false);
    const alphabetUpperCase = alphabetArray(true);
    const numbers = numbersArray();
    const symbols = symbolsArray();

    let char: string[] = [];
    let password = '';
    if (useUpperCase) {
        char = [...char, ...alphabetUpperCase];
    }

    if (useLowerCase) {
        char = [...char, ...alphabetLowerCase];
    }

    if (useNumbers) {
        char = [...char, ...numbers];
    }

    if (useSymbols) {
        char = [...char, ...symbols];
    }

    if (char.length === 0) {
        return password;
    }

    password = passwordRandomizer(char, sliderValue);

    return password;
};
