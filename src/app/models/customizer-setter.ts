import { Subscription } from "rxjs";

export interface ICustomizerUpdater
{
    /** Set the palette. */
    Palette: (callback?: () => void) => Subscription;
    /** Set dark mode value. */
    DarkMode: (callback?: () => void) => Subscription;
    /** Set the font. */
    Font: (callback?: () => void) => Subscription;
    /** Set the text size. */
    TextSize: (callback?: () => void) => Subscription;
    /** Set breakpoint value. */
    Breakpoint: (callback?: () => void) => Subscription;
    /** Get the current HTML document and set its title. */
    Route: () => Subscription;
}
