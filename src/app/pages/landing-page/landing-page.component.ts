import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    imports: [HeroComponent],
})
export default class LandingPageComponent {}
