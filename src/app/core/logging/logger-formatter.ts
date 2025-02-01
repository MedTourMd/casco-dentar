import type { LumberjackLog } from "@ngworker/lumberjack";
import { loggerScopes } from "./logger-scopes";

// export const loggerColors = {
//     critical: "\x1B[31m",
// } as const satisfies Record<LumberjackLogLevel, string>;

function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const milliseconds = date.getMilliseconds().toString().padEnd(3, "0");
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${milliseconds}`;
}

export function lumberjackFormatLog({ scope, createdAt: timestamp, level, message }: LumberjackLog) {
    const _scope = scope ? `[${scope}] ` : "";
    const color =
        scope !== undefined && scope in loggerScopes ? loggerScopes[scope as keyof typeof loggerScopes].color : "";
    return `${formatDate(timestamp)} ${level.toUpperCase()} | ${color}${_scope}${message}`;
}
