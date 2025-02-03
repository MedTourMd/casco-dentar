import { Component, inject } from "@angular/core";
import { ThemeService } from "../../core/services/theme.service";
import { IconComponent } from "../../features/icons/icon/icon.component";
import { moon, sun } from "../../features/icons/icons";

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
