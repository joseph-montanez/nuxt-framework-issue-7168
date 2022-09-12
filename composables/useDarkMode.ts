import {useState} from "#app";
import {reactive} from "vue";

export interface ColorScheme {
    mode: string,
}

const mode = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light';

export const colorScheme = reactive({mode: mode} as ColorScheme);


export const useColorSchemeModes = () => useState<ColorScheme|null>('colorScheme', () => {
    if (colorScheme == null || (typeof colorScheme.mode === 'undefined')) {
        const darkModeData = typeof localStorage !== 'undefined' ? localStorage.getItem('colorScheme') : null;

        let colorScheme1: ColorScheme;
        if (darkModeData != null) {
            try {
                colorScheme1 = JSON.parse(darkModeData);
            } catch (e) {
                colorScheme1 = {mode: mode} as ColorScheme;
            }
        } else {
            colorScheme1 = {mode: mode} as ColorScheme;
        }

        if (colorScheme1.mode) {
            colorScheme.mode = colorScheme1.mode;
        }
    }

    return colorScheme;
});

export const writeColorScheme = (colorScheme: ColorScheme) => {
    typeof localStorage !== 'undefined' ? localStorage.setItem('colorScheme', JSON.stringify(colorScheme)) : null;
}