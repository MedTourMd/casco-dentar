import { NgOptimizedImage } from "@angular/common";
import { Component, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconComponent } from "../../features/icons/icon/icon.component";
import { bars, close } from "../../features/icons/icons";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

interface NavItem {
    readonly title: string;
    readonly link: string;
    readonly fragment?: string;
}

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    imports: [NgOptimizedImage, ThemeSwitcherComponent, RouterLink, RouterLinkActive, IconComponent],
})
export class ToolbarComponent {
    protected readonly navItems: NavItem[] = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Contact",
            link: "/",
            fragment: "contact",
        },
    ];
    protected readonly bars = bars;
    protected readonly close = close;
    protected readonly showMobileMenu = signal(false);
}
