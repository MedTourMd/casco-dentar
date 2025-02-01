import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";

export const Themes = {
    dark: "dark",
    light: "light",
    system: undefined,
} as const;

export type Theme = typeof Themes;

const themeKey = "currentTheme";

@Injectable({
    providedIn: "root",
})
export class PreferencesService {
    readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    activateTheme() {
        if (!this.#isBrowser) {
            return;
        }

        const currentThemeIsDark = localStorage[themeKey] === "dark";
        const prefersDark = !(themeKey in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", currentThemeIsDark || prefersDark);

        console.log("PreferencesService theme toggled");
    }

    setTheme(theme: Theme) {
        if (theme) {
            localStorage[themeKey] = theme;
        } else {
            localStorage.removeItem(themeKey);
        }
        this.activateTheme();
    }
}
