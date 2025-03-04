import { INavbarItem } from "./navbar-item";

export interface INavigationParams
{
    readonly COLORS: string[];
    readonly LANGUAGES: string[];
    readonly NAVBAR_ITEMS: INavbarItem[];
}
