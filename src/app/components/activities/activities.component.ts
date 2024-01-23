

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: `
    
    <div *ngIf="data">
      <h3>Activities</h3>
     
      <ul>
        <li *ngFor="let activity of data">
          {{ activity }}
        </li>
      </ul>
    </div>
  `,
})
export class ActivitiesComponent {
  @Input() data: any[] = [];
}
