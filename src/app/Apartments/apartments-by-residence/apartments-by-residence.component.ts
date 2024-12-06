import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../../core/models/Apartment';  // Assurez-vous que le modèle Apartment est importé

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  residenceId!: number;  // ID de la résidence
  apartments: Apartment[] = [];  // Tableau filtré des appartements

  // Données statiques d'exemple pour les appartements
  private allApartments: Apartment[] = [
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la résidence depuis l'URL
    this.residenceId = +this.route.snapshot.paramMap.get('residenceId')!;

    // Filtrer les appartements en fonction de l'ID de la résidence
    this.apartments = this.allApartments.filter(apartment => apartment.ResidenceId === this.residenceId);
  }
}
