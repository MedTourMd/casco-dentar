import { type ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";

import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { provideLumberjack } from "@ngworker/lumberjack";
import { provideLumberjackConsoleDriver } from "@ngworker/lumberjack/console-driver";
import { routes } from "./app.routes";
import { lumberjackFormatLog } from "./core/logging/logger-formatter";

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideAnimationsAsync(),
        provideLumberjack({
            format: lumberjackFormatLog,
        }),
        provideLumberjackConsoleDriver(),
    ],
};
