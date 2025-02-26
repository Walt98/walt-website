import { Subscription } from "rxjs";

export interface ICustomizerUpdater
{
    /** Set the palette. */
    Palette: () => Subscription;
    /** Set dark mode value. */
    DarkMode: () => Subscription;
    /** Set the font. */
    Font: () => Subscription;
    /** Set text slider value. */
    TextSlider: () => Subscription;
    /** Set breakpoint value. */
    Breakpoint: () => Subscription;
    /** Get the current HTML document and set its title. */
    Route: () => Subscription;
}