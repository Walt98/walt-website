import { IPalette } from "./palette";

export interface ICustomizer
{
    Breakpoint: boolean;
    Palette: IPalette;
    DarkMode: boolean;
    TextSize: string;
}

export interface ICustomizerUpdater
{
    /** Set breakpoint value. */
    Breakpoint: (callback?: () => void) => void;
    /** Set the palette. */
    Palette: (callback?: () => void) => void;
    /** Set dark mode value. */
    DarkMode: (callback?: () => void) => void;
    /** Set the text size. */
    TextSize: (callback?: () => void) => void;
}
