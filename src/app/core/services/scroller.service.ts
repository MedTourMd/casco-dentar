import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Logger } from "../logging/logger.service";

@Injectable({
    providedIn: "root",
})
export class ScrollerService {
    readonly #router = inject(Router);
    readonly #logger = inject(Logger);

    async scrollIntoView(href: string) {
        const [routerLink, fragment] = href.split("#");

        if (routerLink?.length > 0) {
            await this.#router.navigate([routerLink]);
        }

        if (fragment === undefined || fragment.length === 0) {
            this.#logger.warn("[SCROLLER] Fragment not found: ", href);
            return;
        }

        let id = fragment;
        if (!fragment.startsWith("#")) {
            id = `#${fragment}`;
        }

        const element = document.querySelector(id);
        if (!element) {
            this.#logger.error("[SCROLLER] No element with id: ", id);
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
    }
}
