import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import type FlowBiteType from "flowbite";

@Injectable({
    providedIn: "root",
})
export class FlowbiteService {
    readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    init(callback: (flowbite: typeof FlowBiteType) => void) {
        if (this.#isBrowser) {
            console.log("Initializing Flowbite...");
            import("flowbite").then((flowbite) => callback(flowbite), console.error);
        }
    }
}
