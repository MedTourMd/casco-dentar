import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { WhatIsCascoComponent } from "./what-is-casco/what-is-casco.component";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    imports: [HeroComponent, WhatIsCascoComponent],
})
export default class LandingPageComponent {}
