import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactsList } from '../interfaces/ContactsList';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  public contacts: ContactsList[] = [
    {
      id: '(14) 9962-1252',
      name: 'Ari',
      fullname: 'Ariane Rodokas Barbosa',
      image: 'https://m.media-amazon.com/images/I/81hZXwAi55L.jpg',
      email: 'arirodokas@gmail.com',
    },
    {
      id: '(14) 9876-5432',
      name: 'Gabi',
      fullname: 'Gabriela Vitória da Silva',
      image: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2022/03/97591920_m-scaled.jpg',
      email: 'vigabies@gmail.com',
    },
    {
      id: '(11) 1234-5678',
      name: 'Marcela',
      fullname: 'Marcela Pena',
      image: 'https://t.ctcdn.com.br/qMT5q267QzifXeKSn7r1edEmQtU=/1400x788/smart/i608550.jpeg',
      email: 'marcela.pena231@etec.sp.gov.br',
    },
    {
      id: '(21) 9999-8888',
      name: 'Ma',
      fullname: 'Mariana Rove Ferreira',
      image: 'https://64.media.tumblr.com/ca9ad155add866935adca392ac99b337/ab7e1aea19a5e04e-c5/s540x810/8c35fd9ae76f681db30b252d9e27a693c846111a.jpg',
      email: 'marirove@yahoo.com',
    },
    {
      id: '(31) 5555-4444',
      name: 'Vitão',
      fullname: 'Vitor Lopes Nunes',
      image: 'https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2021/12/ad57cb9-guitarra-worship.jpg',
      email: 'vitor.lopes@etec.sp.gov.br',
    },
  ];

  public results = [...this.contacts];
  public ordered = [];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.contacts.filter(d => d.name.toLowerCase().indexOf(query) > -1);
  }

  constructor(private dataService: DataService, private route: Router) {}

  showInfoModal(contact: ContactsList) {
    this.dataService.setData('contact', contact);
    this.route.navigateByUrl('/contact-data');
  }
}
