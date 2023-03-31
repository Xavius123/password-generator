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
): any => {
    let char: string[] = [];
    const alphabetLowerCase = alphabetArray(false);
    const alphabetUpperCase = alphabetArray(true);
    const numbers = numbersArray();
    const symbols = symbolsArray();

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

    const password = passwordRandomizer(char, sliderValue);
    console.log(password);
    // console.log(password);
    // const password = passwordRandomizer(passwordArray);
    // return password;
};
