import { computed, inject, Injectable, signal } from "@angular/core";
import { injectIsBrowser } from "../../core/di-utils";
import { Logger } from "../../core/logging/logger.service";

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
    readonly #logger = inject(Logger);
    readonly #current = signal<Theme>(Themes.light);
    readonly current = this.#current.asReadonly();
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
            this.#current.set(Themes.dark);
        } else {
            this.#current.set(Themes.light);
        }

        this.#logger.info("[THEME] Activated theme: ", this.#current());
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
