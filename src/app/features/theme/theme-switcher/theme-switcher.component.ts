import { Component, inject } from "@angular/core";
import { IconComponent } from "../../icons/icon/icon.component";
import { moon, sun } from "../../icons/icons";
import { ThemeService } from "../theme.service";

@Component({
    selector: "app-theme-switcher",
    imports: [IconComponent],
    templateUrl: "./theme-switcher.component.html",
})
export class ThemeSwitcherComponent {
    protected readonly sun = sun;
    protected readonly moon = moon;
    protected readonly themeService = inject(ThemeService);
}
