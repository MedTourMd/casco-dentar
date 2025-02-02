import { Component, computed, input, ViewEncapsulation } from "@angular/core";
import type { Breakpoint } from "../../core/breakpoints";

export const ButtonFills = {
    solid: "solid",
    outlined: "outlined",
    clear: "clear",
} as const;

export type ButtonFill = (typeof ButtonFills)[keyof typeof ButtonFills];

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    readonly color = input("gray");
    protected readonly colorClasses = computed(() => {
        const color = this.color();
        return `hover:bg-${color}-100 focus:ring-${color}-100 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`;
    });
    readonly href = input<string>();
    readonly roundness = input<Breakpoint>();
    protected readonly roundnessClasses = computed(() => {
        const roundness = this.roundness();
        if (!roundness) {
            return;
        }

        return `rounded-${roundness}`;
    });
    readonly fill = input<ButtonFill>(ButtonFills.solid);
    protected readonly borderClasses = computed(() => {
        if (this.fill() !== ButtonFills.outlined) {
            return "";
        }

        const color = this.color();
        return `border border-${color}-300 dark:border-${color}-700`;
    });
}
