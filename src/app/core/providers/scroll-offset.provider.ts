import { ViewportScroller } from "@angular/common";
import { inject, provideEnvironmentInitializer } from "@angular/core";

export function provideScrollOffset(offset: [number, number] | (() => [number, number])) {
    return provideEnvironmentInitializer(() => inject(ViewportScroller).setOffset(offset));
}
