import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactsList } from '../interfaces/ContactsList';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.page.html',
  styleUrls: ['./contact-data.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactDataPage {

  contact?: ContactsList;

  constructor(private dataService: DataService, private router: Router) { }

  goToRoute(route: string) {
    this.router.navigate([`../${route}`]);
  }

  ngAfterContentChecked() {
    this.contact = this.dataService.getData('contact');
  }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Edit',
      data: {
        action: 'edit'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel'
      }
    }
  ];


}
