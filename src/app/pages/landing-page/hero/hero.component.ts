import { Component } from "@angular/core";
import { IconComponent } from "../../../features/icons/icon/icon.component";
import { arrowRight } from "../../../features/icons/icons";

@Component({
    selector: "app-hero",
    imports: [IconComponent],
    templateUrl: "./hero.component.html",
})
export class HeroComponent {
    protected readonly arrowRight = arrowRight;
}
