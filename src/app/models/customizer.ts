import { IPalette } from "./palette";

export interface ICustomizer
{
    Palette: IPalette;
    DarkMode: boolean;
    TextSize: string;
    Breakpoint: boolean;
}

export interface ICustomizerUpdater
{
    /** Set the palette. */
    Palette: (callback?: () => void) => void;
    /** Set dark mode value. */
    DarkMode: (callback?: () => void) => void;
    /** Set the text size. */
    TextSize: (callback?: () => void) => void;
    /** Set breakpoint value. */
    Breakpoint: (callback?: () => void) => void;
    /** Get the current HTML document and set its title. */
    Route: () => void;
}
