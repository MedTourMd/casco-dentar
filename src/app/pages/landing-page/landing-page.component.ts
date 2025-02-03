import { Component } from "@angular/core";
import { ContactComponent } from "./contact/contact.component";
import { HeroComponent } from "./hero/hero.component";
import { WhatIsCascoComponent } from "./what-is-casco/what-is-casco.component";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    imports: [HeroComponent, WhatIsCascoComponent, ContactComponent],
})
export default class LandingPageComponent {}
