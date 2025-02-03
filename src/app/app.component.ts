import { Component, inject, type OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FlowbiteService } from "./core/services/flowbite.service";
import { ThemeService } from "./core/services/theme.service";

@Component({
    selector: "app-root",
    imports: [ToolbarComponent, RouterOutlet],
    template: `
        <div class="mb-14">
            <app-toolbar />
        </div>

        <router-outlet />
    `,
})
export class AppComponent implements OnInit {
    readonly #themeService = inject(ThemeService);
    readonly #flowbiteService = inject(FlowbiteService);

    ngOnInit() {
        this.#themeService.activateTheme();
        this.#flowbiteService.init((flowbite) => flowbite.initFlowbite());
    }
}
