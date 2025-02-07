import { Component, inject, signal } from "@angular/core";
import { CurrencyService } from "../../features/currencies/currency.service";
import { Currencies, type Currency } from "../../features/currencies/models";
import { IconComponent } from "../../features/icons/icon/icon.component";
import { check } from "../../features/icons/icons";
import { PricingCard, PricingCardBenefit } from "../pricing-card/pricing-card.component";

export interface Benefit {
    readonly icon: string;
    readonly description: string;
}

export const PricingPeriods = {
    month: "month",
    year: "year",
} as const;

export type PricingPeriods = typeof PricingPeriods;

export type PricingPeriod = PricingPeriods[keyof PricingPeriods];

export type Pricing = Record<Currency, Record<PricingPeriod, number>>;

export interface Subscription {
    readonly title: string;
    readonly description: string;
    readonly pricing: Pricing;
    readonly benefits: Benefit[];
    readonly buttonLabel: string;
}

function getPerYearPrice(pricePerMonth: number) {
    const pricePerYear = pricePerMonth * 12;
    const discount = pricePerYear / 10;
    return pricePerYear - discount;
}

@Component({
    selector: "app-pricing",
    templateUrl: "./pricing.component.html",
    imports: [PricingCard, IconComponent, PricingCardBenefit],
})
export class PricingComponent {
    protected readonly currencyService = inject(CurrencyService);
    protected readonly plan = signal<PricingPeriod>(PricingPeriods.month);
    protected readonly subscriptions: Subscription[] = [
        {
            title: "Starter",
            description: "Best option for personal use & for your next project",
            pricing: {
                [Currencies.usd]: {
                    [PricingPeriods.month]: 29,
                    [PricingPeriods.year]: getPerYearPrice(29),
                },
                [Currencies.eur]: {
                    [PricingPeriods.month]: 25,
                    [PricingPeriods.year]: getPerYearPrice(25),
                },
            },
            benefits: [
                {
                    icon: check,
                    description: "Check this",
                },
            ],
            buttonLabel: "Get started",
        },
    ];
}
