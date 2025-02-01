import { isPlatformBrowser } from "@angular/common";
import { Component, inject, type OnInit, PLATFORM_ID } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, ToolbarComponent],
    template: `
        <app-toolbar />
        <router-outlet />
    `,
})
export class AppComponent implements OnInit {
    readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    ngOnInit() {
        if (this.#isBrowser) {
            console.log("Initializing Flowbite...");
            import("flowbite").then((flowbite) => flowbite.initFlowbite(), console.error);
        }
    }
}
