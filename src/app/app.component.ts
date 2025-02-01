import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
})
export class AppComponent {
    title = "casco-dentar";
}
