export const Currencies = {
    eur: "~",
    usd: "$",
} as const;

export type Currencies = typeof Currencies;

export type Currency = Currencies[keyof Currencies];
