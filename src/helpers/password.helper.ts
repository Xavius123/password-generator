export const passwordRandomizer = (characters: string[]): string => {
    let password = '';
    characters.map((characters: any) => {
        return (password +=
            characters[Math.floor(Math.random() * characters.length)]);
    });

    return password;
};

export const passwordGenerator = (): string => {
    let password = '';

    return password;
};
