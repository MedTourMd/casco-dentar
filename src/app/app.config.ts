import { type ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";

import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import {
    provideRouter,
    withComponentInputBinding,
    withEnabledBlockingInitialNavigation,
    withInMemoryScrolling,
    withViewTransitions,
} from "@angular/router";
import { provideLumberjack } from "@ngworker/lumberjack";
import { provideLumberjackConsoleDriver } from "@ngworker/lumberjack/console-driver";
import { routes } from "./app.routes";
import { lumberjackFormatLog } from "./core/logging/logger-formatter";
import { provideScrollOffset } from "./core/providers/scroll-offset.provider";

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter(
            routes,
            withComponentInputBinding(),
            withViewTransitions(),
            withEnabledBlockingInitialNavigation(),
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
            }),
        ),
        provideClientHydration(withEventReplay()),
        provideLumberjack({
            format: lumberjackFormatLog,
        }),
        provideLumberjackConsoleDriver(),
        provideScrollOffset([0, 300]),
    ],
};
