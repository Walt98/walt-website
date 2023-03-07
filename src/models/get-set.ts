import { Subscription } from "rxjs";
import { IPalette } from "./palette";

export interface $
{
    /** Functions used to get Customizers. */
    Get: IGet$;

    /** Functions used to set Customizers (except breakpoint). */
    Set: ISet$;
}

export interface IGet$
{
    /** Get dark mode value ("on" / "off"). */
    DarkMode(next?: (value: string) => void): Subscription;
    /** Get the palette. */
    Palette(next?: (value: IPalette) => void): Subscription;
    /** Get the font. */
    Font(next?: (value: string) => void): Subscription;
    /** Get blur value ("on" / "off"). */
    Blur(next?: (value: string) => void): Subscription;
    /** Used to understand if the display is large or not. */
    Breakpoint(next?: (value: boolean) => void): Subscription;
}

interface ISet$
{
    /** Set dark mode. */
    DarkMode(value: string): void;
    /** Set the palette. */
    Palette(value: IPalette): void;
    /** Set the font. */
    Font(value: string): void;
    /** Set blur. */
    Blur(value: string): void;
}
