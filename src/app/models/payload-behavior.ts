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
    /** Get the text size (from 0.75 to 1.5). */
    textSize(next: (value: string) => void): Subscription;
    /** Get the title of the HTML document. */
    route(next: (value: string) => void): Subscription;
    /** Used to understand if the display is large or not. */
    breakpoint(next: (value: boolean) => void): Subscription;
}

interface ISet$
{
    /** Set dark mode. */
    darkMode(value: string): void;
    /** Set the palette. */
    palette(value: IPalette): void;
    /** Set the text size. */
    textSize(value: string): void;
    /** Set the title of the HTML document. */
    route(value: string): void;
}
