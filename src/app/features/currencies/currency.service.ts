import { Injectable, signal } from "@angular/core";
import { Currencies, type Currency } from "./models";

@Injectable({
    providedIn: "root",
})
export class CurrencyService {
    readonly #current = signal<Currency>(Currencies.usd);
    readonly current = this.#current.asReadonly();

    toggle(currency: Currency) {
        this.#current.set(currency);
    }
}
