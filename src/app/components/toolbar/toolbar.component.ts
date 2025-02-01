import { Component } from "@angular/core";
import {
    NavbarBrandComponent,
    NavbarComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    NavbarToggleComponent,
} from "flowbite-angular/navbar";

@Component({
    selector: "app-toolbar",
    imports: [
        NavbarBrandComponent,
        NavbarToggleComponent,
        NavbarContentComponent,
        NavbarItemComponent,
        NavbarComponent,
    ],
    templateUrl: "./toolbar.component.html",
    styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {}
