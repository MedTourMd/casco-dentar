import { Component } from "@angular/core";
import { IconComponent } from "../../../features/icons/icon/icon.component";
import { cash, expand, salePercent, shieldCheck, shuffle, usersGroup } from "../../../features/icons/icons";

@Component({
    selector: "app-what-is-casco",
    imports: [IconComponent],
    templateUrl: "./what-is-casco.component.html",
})
export class WhatIsCascoComponent {
    protected readonly benefits = [
        {
            icon: expand,
            title: "Acoperire extinsă",
            details:
                "Poate acoperi o gamă largă de servicii, de la consultații și igienă orală, până la tratamente complexe precum obturații, extracții, protetică, implantologie și ortodonție (aparate dentare)",
        },
        {
            icon: salePercent,
            title: "Costuri reduse",
            details:
                "Printr-un simplu abonament ai acces la tratamente stomatologice la prețuri preferențiale, semnificativ reduse față de costurile standard. Practic, împarți riscul financiar al unor tratamente costisitoare cu compania de asigurări",
        },
        {
            icon: usersGroup,
            title: "Acces la clinici și medici parteneri",
            details:
                "Companiile de asigurări au de obicei o rețea de clinici și medici stomatologi parteneri, unde poți beneficia de tarife reduse și servicii de calitate",
        },
        {
            icon: shieldCheck,
            title: "Prevenție",
            details:
                "Multe CASCO-uri dentare includ și servicii de prevenție, cum ar fi controale stomatologice periodice, igienizare profesională și fluorizare, încurajând astfel menținerea unei bune sănătăți orale",
        },
        {
            icon: shuffle,
            title: "Flexibilitate",
            details:
                "Există diferite pachete de CASCO dentar, cu diferite niveluri de acoperire și prețuri, astfel încât poți alege varianta potrivită nevoilor și bugetului tău",
        },
        {
            icon: cash,
            title: "Avantaje față de plata directă",
            details:
                "CASCO-ul dentar te ajută să gestionezi mai bine costurile stomatologice, evitând cheltuieli mari neașteptate. Știi de la început cât vei plăti lunar sau anual și ai acces la tratamente de calitate, fără a amâna vizita la dentist din motive financiare",
        },
    ] as const;
}
