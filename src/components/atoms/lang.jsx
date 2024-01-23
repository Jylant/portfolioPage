import { atom } from 'recoil';

export const languageAtom = atom({
    key: 'language',
    default: 'English',
    choices: ['English', 'Finnish'],
});
