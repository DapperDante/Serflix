import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    constructor(private router: Router){}
    ngOnInit() {
        this.model = [
            {
                label: 'View',
                items: [
                    {
                        label: 'Movies',
                        icon: 'pi pi-caret-right',
                        command: ()=>{
                            this.NavigateOtherPage('movie');
                        }
                    },
                    {
                        label: 'Series',
                        icon: 'pi pi-chart-line',
                        command: ()=>{
                            this.NavigateOtherPage('serie');
                        }
                    }
                ]
            }
        ]
    }
    NavigateOtherPage(path: string){
        this.router.navigate(['home', path]);
    }
}
