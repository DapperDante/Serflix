import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }
    ngOnInit(): void {
        this.primengConfig.ripple = true;
        this.layoutService.config.set({
            ripple: false,
            inputStyle: 'outlined',
            menuMode: 'overlay',
            colorScheme: 'dark',
            componentTheme: 'blue',
            scale: 14,
            menuTheme: 'dark',
            topbarTheme: 'red',
            menuProfilePosition: 'start',
        })
        this.layoutService.state.rightMenuActive = false;
    }

}
