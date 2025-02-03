import { Component } from "@angular/core";

export interface Subscription {
    readonly title: string;
    readonly description: string;
    readonly pricePerMonth: number;
    readonly pricePerYear: number;
    readonly benefits: string[];
}

@Component({
    selector: "app-pricing",
    templateUrl: "./pricing.component.html",
})
export class PricingComponent {
    protected readonly subscriptions: Subscription[] = [
        {
            title: "Starter",
            description: "Best option for personal use & for your next project",
            pricePerMonth: 29,
            pricePerYear: 29 * 12 - (29 * 12) / 10,
            benefits: [""],
        },
    ];
}
