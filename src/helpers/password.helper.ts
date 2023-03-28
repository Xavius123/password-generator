import { alphabetArray, numbersArray, symbolsArray } from './string.helper';

export const passwordRandomizer = (
    characters: string[],
    sliderValue: number
): string => {
    let password = '';
    characters.map((characters: any) => {
        return (password +=
            characters[Math.floor(Math.random() * characters.length)]);
    });

    return password;
};

export const passwordGenerator = (
    sliderValue: number,
    useUpperCase: boolean,
    useLowerCase: boolean,
    useNumbers: boolean,
    useSymbols: boolean
): string => {
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
    return password;
};
