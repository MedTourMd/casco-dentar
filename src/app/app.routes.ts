import type { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/landing-page/landing-page.component"),
    },
];
