import { NgOptimizedImage } from "@angular/common";
import { Component, computed, inject, input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: "app-icon",
    imports: [NgOptimizedImage],
    templateUrl: "./icon.component.html",
    styles: `
        :host {
            position: relative;
            display: block;
        }
    `,
})
export class IconComponent {
    readonly #sanitizer = inject(DomSanitizer);
    readonly icon = input.required<string>();
    protected readonly svgIcon = computed(() => {
        if (!this.icon().trim().startsWith("<svg")) {
            return undefined;
        }

        return this.#sanitizer.bypassSecurityTrustHtml(this.icon().trim());
    });
}
