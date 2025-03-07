import { IPalette } from "./palette";

export interface ISetter$
{
    /** Set the palette. */
    palette(value: IPalette): void;
    /** Set dark mode. */
    darkMode(value: string): void;
    /** Set the text size. */
    textSize(value: string): void;
}
