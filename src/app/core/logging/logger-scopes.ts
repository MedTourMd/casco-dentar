import type { LumberjackLogLevel } from "@ngworker/lumberjack";

export const LogLevels = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    critical: 5,
} as const satisfies Record<LumberjackLogLevel, number>;

export type LogLevel = (typeof LogLevels)[keyof typeof LogLevels];

export const LogLevelsReversed = Object.fromEntries(
    Object.entries(LogLevels).map(([key, value]) => [value, key] as const),
) as Record<LogLevel, LumberjackLogLevel>;

export interface LoggerScopeConfig {
    level: LogLevel;
    color?: string;
    enabled?: boolean;
}

export const loggerColors = {
    blue: "\x1B[34m",
    something: "\x1B[33m",
} as const;

export const loggerScopes = {
    FLOWBITE: {
        enabled: true,
        color: loggerColors.blue,
        level: LogLevels.info,
    },
} as const satisfies Record<string, LoggerScopeConfig>;
