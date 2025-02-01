import { computed, Injectable, signal } from "@angular/core";
import { injectIsBrowser } from "../di-utils";

export const Themes = {
    dark: "dark",
    light: "light",
    system: undefined,
} as const;

export type Theme = "dark" | "light";

const themeKey = "currentTheme";

@Injectable({
    providedIn: "root",
})
export class ThemeService {
    readonly #isBrowser = injectIsBrowser();
    readonly current = signal<Theme>(Themes.light);
    readonly isDark = computed(() => this.current() === Themes.dark);

    activateTheme() {
        if (!this.#isBrowser) {
            return;
        }

        const currentThemeIsDark = localStorage[themeKey] === Themes.dark;
        const prefersDark = !(themeKey in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDark = currentThemeIsDark || prefersDark;

        document.documentElement.classList.toggle(Themes.dark, isDark);
        if (isDark) {
            this.current.set(Themes.dark);
        } else {
            this.current.set(Themes.light);
        }

        console.log("PreferencesService theme toggled: ", this.current());
    }

    toggle(theme?: keyof typeof Themes) {
        localStorage[themeKey] = this.#getConcreteTheme(theme);
        this.activateTheme();
    }

    #getConcreteTheme(theme?: keyof typeof Themes) {
        if (!theme) {
            return this.current() === Themes.dark ? Themes.light : Themes.dark;
        }

        if (theme === Themes.system) {
            return undefined;
        }

        return theme;
    }
}
