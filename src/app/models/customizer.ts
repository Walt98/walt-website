import { IPalette } from "./palette";

export interface ICustomizationParams
{
    Palette: IPalette;
    DarkMode: boolean;
    Font: string;
    TextSlider: string;
    Breakpoint: boolean;
}
