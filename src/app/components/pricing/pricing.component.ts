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
            title: "Basic",
            description:
                "Ideal pentru cei care doresc să facă primii pași spre o dantură sănătoasă și frumoasă, planul Basic oferă o acoperire esențială la un preț accesibil",
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
                    description: "O consultație gratuită pe an",
                },
                {
                    icon: check,
                    description: "Un periaj și un detartraj gratuit pe an",
                },
                {
                    icon: check,
                    description: "UN tratament de fluorizare pe an",
                },
                {
                    icon: check,
                    description: "O radiografie (retroalveolară sau panoramică) gratuită pe an",
                },
                {
                    icon: check,
                    description: "Reducere de 20% la obturații cu materiale compozite",
                },
                {
                    icon: check,
                    description: "Reducere de 10% la extracții simple",
                },
            ],
            buttonLabel: "Get started",
        },
        {
            title: "Standard",
            description:
                "Conceput pentru cei care înțeleg importanța unei danturi sănătoase și frumoase, planul Standard oferă o acoperire extinsă, incluzând tratamente mai complexe și beneficii suplimentare",
            pricing: {
                [Currencies.usd]: {
                    [PricingPeriods.month]: 50,
                    [PricingPeriods.year]: getPerYearPrice(50),
                },
                [Currencies.eur]: {
                    [PricingPeriods.month]: 45,
                    [PricingPeriods.year]: getPerYearPrice(45),
                },
            },
            benefits: [
                {
                    icon: check,
                    description: "3 consultații gratuite pe an",
                },
                {
                    icon: check,
                    description: "3 periaje și detartraje gratuite pe an",
                },
                {
                    icon: check,
                    description: "3 tratamente de fluorizare pe an",
                },
                {
                    icon: check,
                    description: "3 radiografii (retroalveolare sau panoramice) gratuite pe an",
                },
                {
                    icon: check,
                    description: "Reducere de 30% la obturații cu materiale compozite",
                },
                {
                    icon: check,
                    description: "Reducere de 20% la extracții simple",
                },
                {
                    icon: check,
                    description: "Reducere de 15% la tratamente endodontice",
                },
            ],
            buttonLabel: "Get started",
        },
        {
            title: "Premium",
            description:
                "Dedicat celor care își doresc tot ce este mai bun pentru sănătatea lor orală, planul Premium oferă o acoperire nelimitată și beneficii exclusive",
            pricing: {
                [Currencies.usd]: {
                    [PricingPeriods.month]: 100,
                    [PricingPeriods.year]: getPerYearPrice(100),
                },
                [Currencies.eur]: {
                    [PricingPeriods.month]: 90,
                    [PricingPeriods.year]: getPerYearPrice(90),
                },
            },
            benefits: [
                {
                    icon: check,
                    description: "Nelimitate consultații gratuită pe an",
                },
                {
                    icon: check,
                    description: "Nelimitate periaje și detartraje gratuit pe an",
                },
                {
                    icon: check,
                    description: "Nelimitate tratamente de fluorizare pe an",
                },
                {
                    icon: check,
                    description: "Nelimitate radiografii (retroalveolară sau panoramică) gratuite pe an",
                },
                {
                    icon: check,
                    description: "Reducere de 30% la obturații cu materiale compozite",
                },
                {
                    icon: check,
                    description: "Reducere de 20% la extracții simple",
                },
                {
                    icon: check,
                    description: "Reducere de 25% la tratamente endodontice",
                },
            ],
            buttonLabel: "Get started",
        },
    ];
}
