import { type ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";

import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { initFlowbite } from "flowbite-angular/core";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        initFlowbite(),
        provideAnimationsAsync(),
    ],
};
