import { HttpClient } from "@angular/common/http";
import { inject, isDevMode, provideAppInitializer } from "@angular/core";
import { EMPTY, catchError, filter, map, switchMap, tap } from "rxjs";
import { injectIsBrowser } from "../di-utils";
import { Logger } from "../logging/logger.service";

export function provideCacheRefresh() {
    return provideAppInitializer(() => invalidateCacheAndRefresh());
}

function getPackageJson() {
    const http = inject(HttpClient);
    const randomString = Math.random().toString(36);
    return http.get<{ version: string }>(`/package.json?refreshVal=${randomString}`);
}

function invalidateCacheAndRefresh() {
    if (!injectIsBrowser() || isDevMode()) {
        return;
    }

    const logger = inject(Logger);
    const getVersions$ = getPackageJson().pipe(
        map(res => res.version),
        map(newVersion => {
            const oldVersion = localStorage.getItem("casco-frontend-version");
            logger.info("[CACHES] Old version:", oldVersion);
            logger.info("[CACHES] New version:", newVersion);
            return [newVersion, oldVersion] as const;
        }),
    );

    const setVersions$ = getVersions$.pipe(
        filter(([newVersion, oldVersion]) => !oldVersion || oldVersion !== newVersion),
        tap(([newVersion]) => localStorage.setItem("casco-frontend-version", newVersion)),
    );

    const deleteCaches$ = setVersions$.pipe(
        switchMap(() => caches.keys()),
        switchMap(keys => {
            logger.info("[CACHES] Deleting old caches:", keys);
            return Promise.all(keys.map(key => caches.delete(key)));
        }),
    );

    return deleteCaches$.pipe(
        tap(() => location.reload()),
        catchError(err => {
            logger.info("[CACHES] Error during cache invalidation:", err);
            return EMPTY;
        }),
    );
}
