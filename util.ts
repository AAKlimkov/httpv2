import {readFile, writeFile} from 'fs/promises';

export const writeDataToFile = async (src: string, fileContent) => {
    try {
        await writeFile(src, fileContent, {flag: 'w'});
    } catch (error) {
        console.error(error)
    }
};


export const readData = async (src: string) => {
    try {
        const text = await readFile(src, 'utf8');
        return text
    } catch (error) {
        console.error(error)
    }
};
