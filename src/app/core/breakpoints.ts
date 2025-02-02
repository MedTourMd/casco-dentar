export const Breakpoints = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "2xl",
} as const;

type Breakpoints = typeof Breakpoints;

export type Breakpoint = Breakpoints[keyof Breakpoints];
