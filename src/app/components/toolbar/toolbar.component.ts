import { Component, inject } from "@angular/core";
import { ThemeService } from "../../core/services/theme.service";
import { IconComponent } from "../../features/icons/icon/icon.component";
import { moon, sun } from "../../features/icons/icons";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrl: "./toolbar.component.scss",
    imports: [IconComponent],
})
export class ToolbarComponent {
    protected readonly themeService = inject(ThemeService);
    protected readonly sun = sun;
    protected readonly moon = moon;
}
