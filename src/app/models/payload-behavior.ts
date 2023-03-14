import { Subscription } from "rxjs";
import { IPalette } from "./palette";

export interface IPayloadBehavior$
{
    /** Get customitazion params. */
    get: IGet$;

    /** Set customitazion params (except breakpoint). */
    set: ISet$;
}

interface IGet$
{
    /** Get dark mode value ("on" / "off"). */
    darkMode(next: (value: string) => void): Subscription;
    /** Get the palette. */
    palette(next: (value: IPalette) => void): Subscription;
    /** Get the font. */
    font(next: (value: string) => void): Subscription;
    /** Get blur value ("on" / "off"). */
    blur(next: (value: string) => void): Subscription;
    /** Used to understand if the display is large or not. */
    breakpoint(next: (value: boolean) => void): Subscription;
}

interface ISet$
{
    /** Set dark mode. */
    darkMode(value: string): void;
    /** Set the palette. */
    palette(value: IPalette): void;
    /** Set the font. */
    font(value: string): void;
    /** Set blur. */
    blur(value: string): void;
}
