import {writeFile} from 'fs/promises';

export const writeDataToFile = async (src: string, fileContent) => {
    try {
        await writeFile(src, fileContent, {flag: 'wx'});
    } catch (error) {
        console.error(error)
    }
};


