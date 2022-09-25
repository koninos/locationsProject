import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addLocation } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/reducers/app.state';
import { Location } from '../../../models/location.model';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridHeaderComponent {

  @Input() filterForm: FormControl;
  
  public newLocationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    coordinates: this.fb.group({
      latitude: ['', Validators.required],
      longitude: ['', Validators.required]
    })
  });
  
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private store: Store<AppState>
  ) { }

  public addLocationModal(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
      .then((result) => {}, (reason) => {
        this.newLocationForm.reset();
      });
  }

  public saveLocation(event: Event): void {
    event.preventDefault();
    const co = this.newLocationForm.get('coordinates');
    const newLocation: Location = {
      name: this.newLocationForm.get('name')?.value,
      coordinates: {
        latitude: Number(co?.get('latitude')?.value),
        longitude: Number(co?.get('longitude')?.value),
      }
    };

    this.store.dispatch(addLocation({ location: newLocation }));
  }

}
