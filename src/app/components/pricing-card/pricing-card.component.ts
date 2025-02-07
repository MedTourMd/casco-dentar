import { Component } from "@angular/core";

@Component({
    selector: "app-pricing-card",
    template: `
        <div
            class="flex w-full flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
            <h3 class="mb-4 text-2xl font-semibold">
                <ng-content select="[title]" />
            </h3>

            <h3 class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <ng-content select="[description]" />
            </h3>

            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">
                    <ng-content select="[value]" />
                </span>

                <span class="text-gray-500 dark:text-gray-400">
                    <ng-content select="[period]" />
                </span>
            </div>

            <ul class="mb-8 space-y-4 text-left" role="list">
                <ng-content select="[benefit]" />
            </ul>

            <ng-content select="[button]" />
        </div>
    `,
})
export class PricingCard {}

@Component({
    selector: "app-pricing-card-benefit",
    template: `
        <li class="flex items-center space-x-3">
            <ng-content />
        </li>
    `,
})
export class PricingCardBenefit {}
