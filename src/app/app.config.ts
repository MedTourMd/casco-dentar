import { provideHttpClient, withFetch } from "@angular/common/http";
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
import { provideCacheRefresh } from "./core/providers/cache-refresh.provider";
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
        provideHttpClient(withFetch()),
        provideClientHydration(withEventReplay()),
        provideLumberjack({
            format: lumberjackFormatLog,
        }),
        provideLumberjackConsoleDriver(),
        provideScrollOffset([0, 300]),
        provideCacheRefresh(),
    ],
};
