import { IPalette } from "./palette";

export interface ISetter$
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
