import { Injectable } from "@angular/core";
import type FlowBiteType from "flowbite";
import { injectIsBrowser } from "../di-utils";

@Injectable({
    providedIn: "root",
})
export class FlowbiteService {
    readonly #isBrowser = injectIsBrowser();

    init(callback: (flowbite: typeof FlowBiteType) => void) {
        if (!this.#isBrowser) {
            console.log("Its not browser, skip");
            return;
        }

        console.log("Initializing Flowbite...");
        import("flowbite").then((flowbite) => callback(flowbite), console.error);
    }
}
