// activities.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: `
    <!-- Your activities component template goes here -->
    <div *ngIf="data">
      <h3>Activities</h3>
      <!-- Display your activities using the 'data' input property -->
      <!-- Example: -->
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
