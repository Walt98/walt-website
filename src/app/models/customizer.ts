import { IPalette } from "./palette";

export interface ICustomizationParams
{
    DarkMode: boolean;
    Palette: IPalette;
    Font: string;
    Blur: boolean;
    Breakpoint: boolean;
}
