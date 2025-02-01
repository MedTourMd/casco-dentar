import { inject, Injectable } from "@angular/core";
import { LumberjackService, LumberjackTimeService } from "@ngworker/lumberjack";
import { isScope, loggerScopes, type LogLevel, LogLevels, LogLevelsReversed } from "./logger-scopes";

@Injectable({
    providedIn: "root",
})
export class Logger {
    readonly #lumberjack = inject(LumberjackService);
    readonly #time = inject(LumberjackTimeService);

    trace(message: string, ...payload: unknown[]) {
        return this.#log(LogLevels.trace, message, ...payload);
    }

    debug(message: string, ...payload: unknown[]) {
        return this.#log(LogLevels.debug, message, ...payload);
    }

    info(message: string, ...payload: unknown[]) {
        return this.#log(LogLevels.info, message, ...payload);
    }

    warn(message: string, ...payload: unknown[]) {
        return this.#log(LogLevels.warn, message, ...payload);
    }

    error(message: string, ...payload: unknown[]) {
        return this.#log(LogLevels.error, message, ...payload);
    }

    critical(message: string, ...payload: unknown[]) {
        return this.#log(LogLevels.critical, message, ...payload);
    }

    #log(level: LogLevel, message: string, ...payload: unknown[]) {
        let _message = message;
        let scope = undefined;
        const matches = message.match("\\[(.*?)\\]");

        if (matches && matches.length > 1) {
            scope = matches[1].toUpperCase();
            if (isScope(scope)) {
                const featureConfig = loggerScopes[scope];

                if (featureConfig) {
                    if (!featureConfig.enabled || (featureConfig.level !== undefined && featureConfig.level < level)) {
                        return;
                    }
                }

                _message = message.replace(`[${scope}]`, "").trim();
            }
        }

        return this.#lumberjack.log({
            scope,
            level: LogLevelsReversed[level],
            message: _message,
            createdAt: this.#time.getUnixEpochTicks(),
            payload: payload,
        });
    }
}
