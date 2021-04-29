import { Component, OnInit } from '@angular/core';
import { AddplantsService } from './addplants.service';

@Component({
  selector: 'app-addplants',
  templateUrl: './addplants.component.html',
  styleUrls: ['./addplants.component.scss'],
})

export class AddplantsComponent implements OnInit {
    public plants = {
        name: '',
        description: '',
    }

    constructor (
        private addplantsService: AddplantsService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addplantsService.GpCreate(this.plants).subscribe(data => {
            this.plants.name = ''
 	 	this.plants.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}