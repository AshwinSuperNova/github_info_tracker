// language-chart.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-chart',
  template: `
    <div>
      <!-- Your language chart component content goes here -->
      <h3>Language Chart</h3>
      <div *ngIf="data && data.length > 0" class="chart-container">
        <!-- Example: Displaying language data in a simple list -->
        <ul>
          <li *ngFor="let item of data">
            {{ item.language }}: {{ item.value }}
          </li>
        </ul>
      </div>
      <div *ngIf="!data || data.length === 0" class="no-data-message">
        No language data available.
      </div>
    </div>
  `,
})
export class LanguageChartComponent {
  @Input() data: { language: string; value: number }[] = [];
}
