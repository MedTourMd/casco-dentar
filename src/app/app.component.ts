import { Component, inject, type OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FlowbiteService } from "./core/services/flowbite.service";
import { PreferencesService } from "./core/services/preferences.service";

@Component({
    selector: "app-root",
    imports: [ToolbarComponent, RouterOutlet],
    template: `
        <app-toolbar />
        <router-outlet />
    `,
})
export class AppComponent implements OnInit {
    readonly #preferences = inject(PreferencesService);
    readonly #flowbiteService = inject(FlowbiteService);

    ngOnInit() {
        this.#preferences.activateTheme();
        this.#flowbiteService.init((flowbite) => flowbite.initFlowbite());
    }
}
