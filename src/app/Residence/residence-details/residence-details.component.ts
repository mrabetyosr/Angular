import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  idR!: number;
  residenceDetails: any;

  // Liste des résidences (vous pouvez remplacer cela par un service API si nécessaire)
  listResidences: any[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: 'assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: 'assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: 'assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: 'assets/images/R4.jpg', status: 'En Construction' }
  ];

  constructor(private act: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // S'abonner aux changements de paramètres d'URL (id de la résidence)
    this.act.paramMap.subscribe(params => {
      this.idR = +params.get('id')!;
      this.loadResidenceDetails(); // Charger les détails après la modification de l'ID
    });
  }

  // Charger les détails de la résidence en fonction de l'ID
  loadResidenceDetails(): void {
    this.residenceDetails = this.listResidences.find(residence => residence.id === this.idR);
  }

  // Fonction pour aller à la résidence suivante
  goToNextResidence(): void {
    const currentIndex = this.listResidences.findIndex(residence => residence.id === this.idR);
    const nextIndex = currentIndex + 1;

    // Vérification pour s'assurer que nous ne dépassons pas la liste
    if (nextIndex < this.listResidences.length) {
      // Naviguer vers la page de la résidence suivante en utilisant l'ID de la résidence suivante
      this.router.navigate(['/residences', this.listResidences[nextIndex].id]);
    } else {
      alert("Vous êtes déjà à la dernière résidence.");
    }
  }


  // Navigate to Add Residence view (for adding a new residence)
  goToAddResidence(): void {
    this.router.navigate(['/residences/add-residence']);
  }

  // Navigate to Update Residence view (for updating an existing residence)
  goToUpdateResidence(): void {
    if (this.idR) {
      this.router.navigate(['/residences/add-residence'], { queryParams: { id: this.idR } });
    }
  }
}