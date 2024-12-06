import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../core/models/Apartment';  // Assurez-vous que le modèle Apartment est correctement importé.

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];  // Tableau d'appartements.

  ngOnInit(): void {
    // Initialisation avec des données statiques.
    this.apartments = [
      {
        apartNum: 101,
        floorNum: 1,
        surface: 80,
        terrace: true,
        surfaceterrace: 20,
        category: '2BHK',
        ResidenceId: 1
      },
      {
        apartNum: 102,
        floorNum: 1,
        surface: 70,
        terrace: false,
        surfaceterrace: 0,
        category: '1BHK',
        ResidenceId: 1
      },
      {
        apartNum: 201,
        floorNum: 2,
        surface: 100,
        terrace: true,
        surfaceterrace: 30,
        category: '3BHK',
        ResidenceId: 2
      },
      {
        apartNum: 202,
        floorNum: 2,
        surface: 90,
        terrace: false,
        surfaceterrace: 0,
        category: '2BHK',
        ResidenceId: 2
      }
    ];
  }
  
}

