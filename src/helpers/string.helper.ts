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
