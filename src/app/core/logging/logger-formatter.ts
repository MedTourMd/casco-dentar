import type { LumberjackLog } from "@ngworker/lumberjack";
import { isScope, loggerScopes } from "./logger-scopes";

function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const milliseconds = date.getMilliseconds().toString().padEnd(3, "0");
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${milliseconds}`;
}

function getColor(scope?: string) {
    return scope !== undefined && isScope(scope) ? loggerScopes[scope].color : "";
}

export function lumberjackFormatLog({ scope, createdAt: timestamp, level, message }: LumberjackLog) {
    const displayedScope = scope ? `[${scope}] ` : "";
    const color = getColor(scope);
    return `${formatDate(timestamp)} ${level.toUpperCase()} | ${color}${displayedScope}${message}`;
}
