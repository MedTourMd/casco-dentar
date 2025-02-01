import { inject, Injectable } from "@angular/core";
import type FlowBiteType from "flowbite";
import { injectIsBrowser } from "../di-utils";
import { Logger } from "../logging/logger.service";

@Injectable({
    providedIn: "root",
})
export class FlowbiteService {
    readonly #isBrowser = injectIsBrowser();
    readonly #logger = inject(Logger);

    init(callback: (flowbite: typeof FlowBiteType) => void) {
        if (!this.#isBrowser) {
            this.#logger.error("[FLOWBITE] Its not browser, skip");
            return;
        }

        this.#logger.debug("[FLOWBITE] Initializing...");
        import("flowbite").then((flowbite) => {
            callback(flowbite);
            this.#logger.info("[FLOWBITE] Init done!");
        }, console.error);
    }
}
