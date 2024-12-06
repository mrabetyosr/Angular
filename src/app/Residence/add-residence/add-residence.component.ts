import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  isEditMode: boolean = false;
  residenceForm: FormGroup;

  // Sample list of residences (replace with service call)
  listResidences: any[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: 'assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: 'assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: 'assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: 'assets/images/R4.jpg', status: 'En Construction' }
  ];

  constructor(private fb: FormBuilder, private act: ActivatedRoute, private router: Router) {
    // Initialize form
    this.residenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
      status: ['Disponible', Validators.required]
    });
  }

  ngOnInit(): void {
    this.act.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.loadResidenceDetails(Number(id));
      } else {
        this.isEditMode = false;
      }
    });
  }

  loadResidenceDetails(id: number): void {
    const residence = this.listResidences.find(res => res.id === id);
    if (residence) {
      this.residenceForm.setValue({
        name: residence.name,
        address: residence.address,
        image: residence.image,
        status: residence.status
      });
    }
  }

  saveResidence(): void {
    if (this.residenceForm.invalid) {
      alert('Please fill in all required fields');
      return;
    }

    const formValues = this.residenceForm.value;
    if (this.isEditMode) {
      alert(`Residence with ID: ${formValues.name} updated!`);
    } else {
      alert('New residence added!');
    }

    // Navigate back to residences list
    this.router.navigate(['/residences']);
  }
}
